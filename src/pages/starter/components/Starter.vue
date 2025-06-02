<script setup lang="ts"></script>

<template>
  <div class="p-6">
    <!-- Header Section -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">Sign</h2>
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
          <li class="text-sm text-gray-800 dark:text-white/90">Starter</li>
        </ol>
      </nav>
    </div>

    <!-- Action Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- Card: Send for Signature -->
      <div class="rounded-2xl flex-col bg-white dark:bg-slate-900/70 flex shadow">
        <div class="flex-1 p-6">
          <div class="flex justify-between items-center p-2">
            <div>
              <h3 class="text-lg text-gray-500 dark:text-slate-400">Send for Signature</h3>
            </div>
            <div class="text-blue-500">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-start items-center p-2">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
              @click="$router.push('/uploadtosend')"
            >
              Click to start
            </button>
          </div>
        </div>
      </div>

      <!-- Card: Sign Yourself -->
      <div class="rounded-2xl flex-col bg-white dark:bg-slate-900/70 flex shadow">
        <div class="flex-1 p-6">
          <div class="flex justify-between items-center p-2">
            <div>
              <h3 class="text-lg text-gray-500 dark:text-slate-400">Sign yourself</h3>
            </div>
            <div class="text-blue-500">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                class="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-start items-center p-2">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
              @click="$router.push('/upload')"
            >
              Click to start
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No changes needed, Tailwind handles styling well */
</style>
