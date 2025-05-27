<script lang="ts" setup>
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { Bar, Doughnut, Pie } from 'vue-chartjs';
import { auth, db } from '@/firebase';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const contracts = ref<any[]>([]);
const user = ref<any>(null);
const displayName = ref<string>('');
const totalDocuments = ref(0);
const pendingDocuments = ref(0);
const signedDocuments = ref(0);

const pieData = computed(() => ({
  labels: ['Signed', 'Pending', 'Other'],
  datasets: [
    {
      data: [
        signedDocuments.value,
        pendingDocuments.value,
        totalDocuments.value - signedDocuments.value - pendingDocuments.value,
      ],
      backgroundColor: ['#10b981', '#facc15', '#d1d5db'],
      borderWidth: 1,
    },
  ],
}));

const barData = ref({
  labels: [] as string[],
  datasets: [
    {
      label: 'Signed Docs',
      data: [] as number[],
      backgroundColor: '#3b82f6',
      borderRadius: 6,
    },
  ],
});

const barOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1 },
    },
  },
};

const chartOptions = {
  responsive: true,
  plugins: { legend: { position: 'bottom' } },
};

onMounted(() => {
  onAuthStateChanged(auth, u => {
    if (u) {
      user.value = u;
      displayName.value = u.displayName || u.email?.split('@')[0] || 'User';
    }
  });

  const q = query(collection(db, 'contracts'), orderBy('createdAt', 'desc'));
  onSnapshot(q, snapshot => {
    const docs = snapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
    contracts.value = docs;

    totalDocuments.value = docs.length;
    pendingDocuments.value = docs.filter(d => d.status === 'pending').length;
    signedDocuments.value = docs.filter(d => d.status === 'signed').length;

    const signerCounts: Record<string, number> = {};
    docs.forEach(doc => {
      if (doc.status === 'signed') {
        const assignee = doc.assignedTo || 'Unassigned';
        signerCounts[assignee] = (signerCounts[assignee] || 0) + 1;
      }
    });
    barData.value.labels = Object.keys(signerCounts);
    barData.value.datasets[0].data = Object.values(signerCounts);
  });
});

const formatDate = (timestamp: any) => {
  if (!timestamp?.toDate) return '';
  return timestamp.toDate().toLocaleDateString();
};
</script>

<template>
  <div class="p-6 space-y-6">
    <!-- 1. Header Section -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <p class="text-sm text-gray-500">Welcome back, {{ displayName }}</p>
      </div>
      <div class="text-sm text-gray-400">Signedoc / Dashboard</div>
    </div>

    <!-- 2. Top Widgets Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Total Documents</h2>
        <p class="text-3xl font-bold">{{ totalDocuments }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Pending Documents</h2>
        <p class="text-3xl font-bold text-yellow-500">{{ pendingDocuments }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold">Signed Documents</h2>
        <p class="text-3xl font-bold text-green-500">{{ signedDocuments }}</p>
      </div>
    </div>

    <!-- 3. Charts -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">Status Breakdown (Pie)</h2>
        <Pie
          v-if="pieData"
          :data="pieData"
          :options="chartOptions"
        />
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">Signature Ratio (Donut)</h2>
        <Doughnut
          v-if="pieData"
          :data="pieData"
          :options="chartOptions"
        />
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">Signed Docs by Employee</h2>
        <Bar
          v-if="barData"
          :data="barData"
          :options="barOptions"
        />
      </div>
    </div>

    <!-- 4. Document List Section -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Recent Documents</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="doc in contracts"
          :key="doc.docId"
          class="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-bold truncate">{{ doc.fileName || 'Untitled Document' }}</h3>
            <span
              :class="[
                'text-xs font-semibold px-2 py-1 rounded-full',
                doc.status === 'signed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700',
              ]"
            >
              {{ doc.status }}
            </span>
          </div>
          <p class="text-sm text-gray-500 mb-2">Assigned To: {{ doc.assignedTo }}</p>
          <p class="text-sm text-gray-400 mb-4">Uploaded: {{ formatDate(doc.createdAt) }}</p>

          <div class="flex justify-end space-x-2">
            <a
              v-if="doc.fileUrl"
              :href="doc.fileUrl"
              target="_blank"
              class="text-blue-600 text-sm hover:underline"
            >
              View
            </a>
            <a
              v-if="doc.signedUrl"
              :href="doc.signedUrl"
              target="_blank"
              class="text-green-600 text-sm hover:underline"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No design changes - styles preserved from original */
</style>
