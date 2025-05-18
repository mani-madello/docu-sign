<script setup lang="ts">
import { ref } from 'vue';
import LineChart from '@/components/LineChart.vue';
import OverviewCard from '@/components/OverviewCard.vue';

const user = ref({ name: 'John Doe' });

const recentDocuments = [
  { id: 1, name: 'NDA Agreement', type: 'PDF', status: 'Signed', date: '2025-05-15' },
  { id: 2, name: 'Invoice-101', type: 'PDF', status: 'Sent', date: '2025-05-14' },
  { id: 3, name: 'Employment Letter', type: 'DOCX', status: 'Pending', date: '2025-05-13' },
  { id: 4, name: 'Partnership MOU', type: 'PDF', status: 'Archived', date: '2025-05-11' },
];

const statusClass = (status: string) => {
  return (
    {
      Signed: 'text-emerald-600 font-medium',
      Sent: 'text-sky-600 font-medium',
      Pending: 'text-amber-600 font-medium',
      Archived: 'text-gray-500 font-medium',
    }[status] || 'text-gray-600'
  );
};
</script>

<template>
  <div class="p-4 sm:p-6 space-y-6 min-h-screen">
    <!-- Welcome Box -->
    <div class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
      <h1 class="text-2xl font-semibold text-gray-800">
        Welcome back, <span class="text-primary">{{ user.name }}</span
        >!
      </h1>
      <p class="text-gray-500 mt-1">Here’s a quick overview of your document activity.</p>
    </div>

    <!-- Widgets Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
      <OverviewCard
        title="Documents"
        :count="128"
        color="indigo"
      />
      <OverviewCard
        title="Signed"
        :count="94"
        color="emerald"
      />
      <OverviewCard
        title="Sent"
        :count="52"
        color="sky"
      />
      <OverviewCard
        title="Archived"
        :count="16"
        color="amber"
      />
      <OverviewCard
        title="Trash"
        :count="7"
        color="rose"
      />
      <OverviewCard
        title="Users"
        :count="5"
        color="gray"
      />
    </div>

    <!-- Line Chart -->
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Document Activity (Last 6 Months)</h2>
      <LineChart />
    </div>

    <!-- Recent Documents Table -->
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-auto">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Recent Documents</h2>
      <table class="w-full text-left text-gray-700">
        <thead class="text-xs text-gray-500 border-b">
          <tr>
            <th class="py-2">Document</th>
            <th class="py-2">Type</th>
            <th class="py-2">Status</th>
            <th class="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="doc in recentDocuments"
            :key="doc.id"
            class="border-b hover:bg-purple-50"
          >
            <td class="py-2">{{ doc.name }}</td>
            <td class="py-2">{{ doc.type }}</td>
            <td class="py-2">
              <span :class="statusClass(doc.status)">{{ doc.status }}</span>
            </td>
            <td class="py-2">{{ doc.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: var(--color-primary-linear);
}
</style>
