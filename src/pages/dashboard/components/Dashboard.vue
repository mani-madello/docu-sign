<script setup lang="ts">
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { Chart } from 'vue-chartjs';
import { useAuthStore } from '@/store/auth';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const authStore = useAuthStore();
const displayName = computed(() => authStore.user?.displayName || authStore.user?.email?.split('@')[0] || 'User');

const db = getFirestore();
const contracts = ref<any[]>([]);

const fetchContracts = async () => {
  const snapshot = await getDocs(collection(db, 'contracts'));
  contracts.value = snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));
};

onMounted(fetchContracts);

const totalDocuments = computed(() => contracts.value.length);
const hrSigned = computed(() => contracts.value.filter(doc => doc.signedByHR).length);
const employeeSigned = computed(() => contracts.value.filter(doc => doc.signedByEmployee).length);

const totalPercentage = computed(() =>
  totalDocuments.value ? Math.round(((hrSigned.value + employeeSigned.value) / (2 * totalDocuments.value)) * 100) : 0,
);
const hrPercentage = computed(() =>
  totalDocuments.value ? Math.round((hrSigned.value / totalDocuments.value) * 100) : 0,
);
const employeePercentage = computed(() =>
  totalDocuments.value ? Math.round((employeeSigned.value / totalDocuments.value) * 100) : 0,
);

const pieChartData = computed(() => ({
  labels: ['Signed by HR', 'Signed by Employee', 'Unsigned'],
  datasets: [
    {
      backgroundColor: ['#3B82F6', '#8B5CF6', '#E5E7EB'],
      data: [hrSigned.value, employeeSigned.value, totalDocuments.value - hrSigned.value - employeeSigned.value],
    },
  ],
}));

const pieChartOptions = { responsive: true, maintainAspectRatio: false };

const barChartData = computed(() => ({
  labels: ['HR', 'Employee'],
  datasets: [
    {
      label: 'Signatures',
      backgroundColor: ['#3B82F6', '#8B5CF6'],
      data: [hrSigned.value, employeeSigned.value],
    },
  ],
}));

const barChartOptions = {
  responsive: true,
  indexAxis: 'y',
  maintainAspectRatio: false,
};

const formatDate = (timestamp: any) => {
  if (!timestamp) return '-';
  const date = timestamp.toDate?.() || timestamp;
  return new Date(date).toLocaleDateString();
};

const isOverdue = (doc: any) => {
  const createdAt = doc.createdAt?.toDate?.();
  if (!createdAt || (doc.signedByHR && doc.signedByEmployee)) return false;
  const now = new Date();
  const daysSince = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
  return daysSince > 7;
};

const recentActivity = computed(() =>
  [...contracts.value].sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds).slice(0, 5),
);
</script>

<template>
  <div class="p-6">
    <div
      data-v-215d6042=""
      class="flex flex-wrap items-center justify-between gap-3 mb-6"
    >
      <h2
        data-v-215d6042=""
        class="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageTitle"
      >
        Dashboard
      </h2>
      <nav data-v-215d6042="">
        <ol class="flex items-center gap-1.5">
          <li data-v-215d6042="">
            <a
              href="/"
              class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
            >
              Home
              <svg
                class="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></a>
          </li>
          <li class="text-sm text-gray-800 dark:text-white/90">Dashboard</li>
        </ol>
      </nav>
    </div>
    <!-- Title & Welcome -->
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start">
        <h1 class="text-3xl leading-tight">Welcome back, {{ displayName }}</h1>
      </div>
    </section>
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start">
        <span
          class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3"
          ><svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="inline-block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"
            /></svg
        ></span>
        <h3 class="text-2xl leading-tight">Overview</h3>
      </div>
    </section>

    <!-- Status Widgets -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Total Documents -->
      <div class="rounded-2xl flex-col bg-white dark:bg-slate-900/70 flex shadow">
        <div class="flex-1 p-6">
          <div class="flex justify-between items-center mb-3">
            <div
              class="inline-flex items-center text-xs border rounded-full py-1 px-3 bg-blue-500 border-blue-500 text-white"
            >
              <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </span>
              <span>{{ totalPercentage }}%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-lg text-gray-500 dark:text-slate-400">Total Documents</h3>
              <h1 class="text-3xl font-semibold">{{ totalDocuments }}</h1>
            </div>
            <div class="text-blue-500">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="currentColor"
              >
                <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm2 4h10v2H7v-2zm2 4h6v2H9v-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Signed by HR -->
      <div class="rounded-2xl flex-col bg-white dark:bg-slate-900/70 flex shadow">
        <div class="flex-1 p-6">
          <div class="flex justify-between items-center mb-3">
            <div
              class="inline-flex items-center text-xs border rounded-full py-1 px-3 bg-green-500 border-green-500 text-white"
            >
              <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </span>
              <span>{{ hrPercentage }}%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-lg text-gray-500 dark:text-slate-400">Signed by HR</h3>
              <h1 class="text-3xl font-semibold">{{ hrSigned }}</h1>
            </div>
            <div class="text-green-500">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="currentColor"
              >
                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 1 0 20 0A10 10 0 0 0 12 2Zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Signed by Employee -->
      <div class="rounded-2xl flex-col bg-white dark:bg-slate-900/70 flex shadow">
        <div class="flex-1 p-6">
          <div class="flex justify-between items-center mb-3">
            <div
              class="inline-flex items-center text-xs border rounded-full py-1 px-3 bg-purple-500 border-purple-500 text-white"
            >
              <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                </svg>
              </span>
              <span>{{ employeePercentage }}%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-lg text-gray-500 dark:text-slate-400">Signed by Employee</h3>
              <h1 class="text-3xl font-semibold">{{ employeeSigned }}</h1>
            </div>
            <div class="text-purple-500">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="currentColor"
              >
                <path
                  d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5M2 17s0-4 7-4s7 4 7 4v2H2Zm17.5-5a3.5 3.5 0 1 0-3.5-3.5a3.5 3.5 0 0 0 3.5 3.5M17 13c2.03 0 6 1.02 6 4v2h-6Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Completion Overview -->
    <!-- <div class="bg-white shadow rounded-lg p-4 mb-6">
      <h2 class="text-lg font-semibold mb-2">Completion Overview</h2>
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">HR Signature Completion</p>
          <div class="w-full bg-gray-200 rounded-full h-4">
            <div
              class="bg-blue-500 h-4 rounded-full text-right text-xs text-white pr-2"
              :style="{ width: `${((hrSigned / totalDocuments) * 100).toFixed(1)}%` }"
            >
              {{ ((hrSigned / totalDocuments) * 100).toFixed(1) }}%
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">Employee Signature Completion</p>
          <div class="w-full bg-gray-200 rounded-full h-4">
            <div
              class="bg-purple-500 h-4 rounded-full text-right text-xs text-white pr-2"
              :style="{ width: `${((employeeSigned / totalDocuments) * 100).toFixed(1)}%` }"
            >
              {{ ((employeeSigned / totalDocuments) * 100).toFixed(1) }}%
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Recent Activity -->
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start">
        <span
          class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3"
          ><svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="inline-block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"
            /></svg
        ></span>
        <h2 class="text-2xl leading-tight">Recent Activity</h2>
      </div>
    </section>
    <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex mb-6">
      <div class="flex-1 p-6">
        <div
          v-for="(doc, index) in recentActivity"
          :key="index"
          class="justify-between items-center block md:flex border-b last:border-b-0 py-4"
        >
          <!-- Left Side: Icon + Name + Date -->
          <div class="flex items-center justify-center mb-4 md:mb-0">
            <div class="flex items-center justify-start md:flex">
              <div class="flex items-center justify-center mr-4">
                <span
                  class="inline-flex justify-center items-center w-12 h-12 rounded-full text-emerald-500 bg-neutral-50 dark:bg-slate-800"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-center md:text-left">
                <h4 class="text-base font-semibold">
                  {{ doc.fileName || 'Untitled' }}
                </h4>
                <p class="text-gray-500 dark:text-slate-400">
                  <b>{{ formatDate(doc.createdAt) }}</b>
                </p>
              </div>
            </div>
          </div>

          <!-- Right Side: Type + Status Badge -->
          <div class="flex items-center justify-center">
            <div class="text-center md:text-right space-y-2">
              <p class="text-sm text-gray-500">Document</p>
              <div>
                <div
                  class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3"
                  :class="{
                    'bg-emerald-500 border-emerald-500 text-white': doc.signedByHR && doc.signedByEmployee,
                    'bg-yellow-400 border-yellow-400 text-white': doc.signedByHR || doc.signedByEmployee,
                    'bg-gray-300 border-gray-300 text-gray-800': !doc.signedByHR && !doc.signedByEmployee,
                  }"
                >
                  <span>
                    {{
                      doc.signedByHR && doc.signedByEmployee
                        ? 'Fully Signed'
                        : doc.signedByHR
                          ? 'Signed by HR'
                          : doc.signedByEmployee
                            ? 'Signed by Employee'
                            : 'Pending Signatures'
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documents Table -->
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start">
        <span
          class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3"
          ><svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="inline-block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z"
            /></svg
        ></span>
        <h3 class="text-2xl leading-tight">All Documents</h3>
      </div>
    </section>
    <div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="overflow-hidden">
        <div class="max-w-full px-5 overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-gray-100 dark:bg-white/[0.05] text-left text-gray-700 dark:text-gray-300">
              <tr class="border-gray-200 border-y dark:border-gray-700">
                <th class="px-4 py-3">Document</th>
                <th class="px-4 py-3">Assigned To</th>
                <th class="px-4 py-3">HR Signed</th>
                <th class="px-4 py-3">Employee Signed</th>
                <th class="px-4 py-3">Uploaded</th>
                <th class="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="doc in contracts"
                :key="doc.docId"
                class="hover:bg-gray-100 dark:hover:bg-white/[0.03]"
              >
                <td class="px-4 py-4 text-gray-800 dark:text-white">{{ doc.fileName || 'Untitled' }}</td>
                <td class="px-4 py-4 text-gray-600 dark:text-gray-300">{{ doc.assignedTo || 'Unassigned' }}</td>
                <td
                  class="px-4 py-4 font-semibold"
                  :class="doc.signedByHR ? 'text-green-600' : 'text-red-500'"
                >
                  {{ doc.signedByHR ? '✔' : '✖' }}
                </td>
                <td
                  class="px-4 py-4 font-semibold"
                  :class="doc.signedByEmployee ? 'text-purple-600' : 'text-red-500'"
                >
                  {{ doc.signedByEmployee ? '✔' : '✖' }}
                </td>
                <td class="px-4 py-4 text-gray-500 dark:text-gray-400">
                  {{ formatDate(doc.createdAt) }}
                </td>
                <td class="px-4 py-4">
                  <span
                    v-if="isOverdue(doc)"
                    class="text-red-500 font-semibold"
                  >
                    ⚠️ Overdue
                  </span>
                  <span
                    v-else
                    class="text-gray-500 dark:text-gray-400"
                  >
                    On Time
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No design changes - styles preserved from original */
</style>
