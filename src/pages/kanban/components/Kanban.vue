<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-(--breakpoint-2xl)">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2
        class="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageTitle"
      >
        Document Kanban
      </h2>
      <nav>
        <ol class="flex items-center gap-1.5">
          <li>
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
          <li class="text-sm text-gray-800 dark:text-white/90">Document Kanban</li>
        </ol>
      </nav>
    </div>
    <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div>
        <div class="flex flex-col items-center px-4 py-5 xl:px-6 xl:py-6">
          <div class="flex flex-col w-full gap-5 sm:justify-between xl:flex-row xl:items-center">
            <div class="flex flex-wrap items-center gap-x-1 gap-y-2 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
              <button
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md h group hover:text-gray-900 dark:hover:text-white text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              >
                All Documents
                <span
                  class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/15"
                  >23</span
                ></button
              ><button
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md h group hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400"
              >
                To do
                <span
                  class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-white dark:bg-white/[0.03]"
                  >3</span
                ></button
              ><button
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md h group hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400"
              >
                Pending
                <span
                  class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-white dark:bg-white/[0.03]"
                  >6</span
                ></button
              ><button
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md h group hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400"
              >
                Completed
                <span
                  class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium leading-normal group-hover:bg-brand-50 group-hover:text-brand-500 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-400 bg-white dark:bg-white/[0.03]"
                  >14</span
                >
              </button>
            </div>
            <div class="flex flex-wrap items-center gap-3 xl:justify-end">
              <button
                class="inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-100 text-black dark:bg-slate-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 py-2 px-3 mr-3 last:mr-0 mb-3"
                type="button"
              >
                <span class="inline-flex justify-center items-center w-6 h-6"
                  ><svg
                    class="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0826 4.0835C11.0769 4.0835 10.2617 4.89871 10.2617 5.90433C10.2617 6.90995 11.0769 7.72516 12.0826 7.72516C13.0882 7.72516 13.9034 6.90995 13.9034 5.90433C13.9034 4.89871 13.0882 4.0835 12.0826 4.0835ZM2.29004 6.65409H8.84671C9.18662 8.12703 10.5063 9.22516 12.0826 9.22516C13.6588 9.22516 14.9785 8.12703 15.3184 6.65409H17.7067C18.1209 6.65409 18.4567 6.31831 18.4567 5.90409C18.4567 5.48988 18.1209 5.15409 17.7067 5.15409H15.3183C14.9782 3.68139 13.6586 2.5835 12.0826 2.5835C10.5065 2.5835 9.18691 3.68139 8.84682 5.15409H2.29004C1.87583 5.15409 1.54004 5.48988 1.54004 5.90409C1.54004 6.31831 1.87583 6.65409 2.29004 6.65409ZM4.6816 13.3462H2.29085C1.87664 13.3462 1.54085 13.682 1.54085 14.0962C1.54085 14.5104 1.87664 14.8462 2.29085 14.8462H4.68172C5.02181 16.3189 6.34142 17.4168 7.91745 17.4168C9.49348 17.4168 10.8131 16.3189 11.1532 14.8462H17.7075C18.1217 14.8462 18.4575 14.5104 18.4575 14.0962C18.4575 13.682 18.1217 13.3462 17.7075 13.3462H11.1533C10.8134 11.8733 9.49366 10.7752 7.91745 10.7752C6.34124 10.7752 5.02151 11.8733 4.6816 13.3462ZM9.73828 14.096C9.73828 13.0904 8.92307 12.2752 7.91745 12.2752C6.91183 12.2752 6.09662 13.0904 6.09662 14.096C6.09662 15.1016 6.91183 15.9168 7.91745 15.9168C8.92307 15.9168 9.73828 15.1016 9.73828 14.096Z"
                      fill=""
                    /></svg></span
                ><span class="px-2">Filter &amp; Short</span>
              </button>
              <button
                class="inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                type="button"
                 @click="goPage('upload')"
              >
                <span class="inline-flex justify-center items-center w-6 h-6"
                  ><svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    class="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                    /></svg></span
                ><span class="px-2">Sign Document</span>
              </button>
            </div>
          </div>
        </div>
        <!---->
      </div>
      <div
        class="grid grid-cols-1 border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-800 mt-7 dark:divide-gray-800 sm:mt-0 sm:grid-cols-2 xl:grid-cols-3"
      >
        <div>
          <div class="overflow-hidden">
            <div class="p-4 xl:p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="flex items-center gap-3 text-base font-medium text-gray-800 dark:text-white/90">
                  To Do
                  <span
                    class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/[0.03] dark:text-white/80"
                    >3</span
                  >
                </h3>
                <div class="relative">
                  <button class="text-gray-700 dark:text-gray-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                        fill="currentColor"
                      />
                    </svg></button
                  ><!---->
                </div>
              </div>
              <div class="min-h-[200px] space-y-5 mt-5">
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Finish user onboarding</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Tomorrow</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          1</span
                        ><!---->
                      </div>
                      <!---->
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    ></div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">
                        Solve the Dribbble prioritisation issue with the team
                      </h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Jan 8, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          2</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.88066 3.10905C8.54039 1.44932 11.2313 1.44933 12.8911 3.10906C14.5508 4.76878 14.5508 7.45973 12.8911 9.11946L12.0657 9.94479L11.0051 8.88413L11.8304 8.0588C12.9043 6.98486 12.9043 5.24366 11.8304 4.16972C10.7565 3.09577 9.01526 3.09577 7.94132 4.16971L7.11599 4.99504L6.05533 3.93438L6.88066 3.10905ZM8.88376 11.0055L9.94442 12.0661L9.11983 12.8907C7.4601 14.5504 4.76915 14.5504 3.10942 12.8907C1.44969 11.231 1.44969 8.54002 3.10942 6.88029L3.93401 6.0557L4.99467 7.11636L4.17008 7.94095C3.09614 9.01489 3.09614 10.7561 4.17008 11.83C5.24402 12.904 6.98522 12.904 8.05917 11.83L8.88376 11.0055ZM9.94458 7.11599C10.2375 6.8231 10.2375 6.34823 9.94458 6.05533C9.65169 5.76244 9.17682 5.76244 8.88392 6.05533L6.0555 8.88376C5.7626 9.17665 5.7626 9.65153 6.0555 9.94442C6.34839 10.2373 6.82326 10.2373 7.11616 9.94442L9.94458 7.11599Z"
                              fill="currentColor"
                            />
                          </svg>
                          1</span
                        >
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Marketing</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-07.jpg"
                        alt="Solve the Dribbble prioritisation issue with the team"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">
                        Change license and remove products
                      </h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Jan 8, 2027</span
                        ><!----><!---->
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/[0.03] dark:text-white/80 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Dev</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-08.jpg"
                        alt="Change license and remove products"
                      /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="overflow-hidden">
            <div class="p-4 xl:p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="flex items-center gap-3 text-base font-medium text-gray-800 dark:text-white/90">
                  In Progress
                  <span
                    class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-warning-50 text-warning-700 dark:bg-warning-500/15 dark:text-orange-400"
                    >4</span
                  >
                </h3>
                <div class="relative">
                  <button class="text-gray-700 dark:text-gray-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                        fill="currentColor"
                      />
                    </svg></button
                  ><!---->
                </div>
              </div>
              <div class="min-h-[200px] space-y-5 mt-5">
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Work In Progress (WIP) Dashboard</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Today</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          1</span
                        ><!---->
                      </div>
                      <!---->
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-09.jpg"
                        alt="Work In Progress (WIP) Dashboard"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Kanban Flow Manager</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Feb 12, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          8</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.88066 3.10905C8.54039 1.44932 11.2313 1.44933 12.8911 3.10906C14.5508 4.76878 14.5508 7.45973 12.8911 9.11946L12.0657 9.94479L11.0051 8.88413L11.8304 8.0588C12.9043 6.98486 12.9043 5.24366 11.8304 4.16972C10.7565 3.09577 9.01526 3.09577 7.94132 4.16971L7.11599 4.99504L6.05533 3.93438L6.88066 3.10905ZM8.88376 11.0055L9.94442 12.0661L9.11983 12.8907C7.4601 14.5504 4.76915 14.5504 3.10942 12.8907C1.44969 11.231 1.44969 8.54002 3.10942 6.88029L3.93401 6.0557L4.99467 7.11636L4.17008 7.94095C3.09614 9.01489 3.09614 10.7561 4.17008 11.83C5.24402 12.904 6.98522 12.904 8.05917 11.83L8.88376 11.0055ZM9.94458 7.11599C10.2375 6.8231 10.2375 6.34823 9.94458 6.05533C9.65169 5.76244 9.17682 5.76244 8.88392 6.05533L6.0555 8.88376C5.7626 9.17665 5.7626 9.65153 6.0555 9.94442C6.34839 10.2373 6.82326 10.2373 7.11616 9.94442L9.94458 7.11599Z"
                              fill="currentColor"
                            />
                          </svg>
                          2</span
                        >
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Template</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-10.jpg"
                        alt="Kanban Flow Manager"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div>
                    <h4 class="mb-2 text-base text-gray-800 dark:text-white/90">Product Update - Q4 2024</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Dedicated form for a category of users that will perform actions.
                    </p>
                    <div class="my-4">
                      <!-- <img
                        src="/images/task/task.png"
                        alt="Product Update - Q4 2024"
                        class="overflow-hidden rounded-xl border-[0.5px] border-gray-200 dark:border-gray-800"
                      /> -->
                    </div>
                    <div class="flex items-start justify-between gap-6">
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Feb 12, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><messagecircleicon class="w-4 h-4" /> 8</span
                        >
                      </div>
                      <div
                        class="h-6 w-6 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                      >
                        <!-- <img
                          src="/images/user/user-11.jpg"
                          alt="Product Update - Q4 2024"
                        /> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">
                        Make figbot send comment when ticket is auto-moved back to inbox
                      </h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Mar 08, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          1</span
                        ><!---->
                      </div>
                      <!---->
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-12.jpg"
                        alt="Make figbot send comment when ticket is auto-moved back to inbox"
                      /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="overflow-hidden">
            <div class="p-4 xl:p-6">
              <div class="flex items-center justify-between mb-1">
                <h3 class="flex items-center gap-3 text-base font-medium text-gray-800 dark:text-white/90">
                  Completed
                  <span
                    class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500"
                    >4</span
                  >
                </h3>
                <div class="relative">
                  <button class="text-gray-700 dark:text-gray-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                        fill="currentColor"
                      />
                    </svg></button
                  ><!---->
                </div>
              </div>
              <div class="min-h-[200px] space-y-5 mt-5">
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Manage internal feedback</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Tomorrow</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          1</span
                        ><!---->
                      </div>
                      <!---->
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-13.jpg"
                        alt="Manage internal feedback"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">
                        Do some projects on React Native with Flutter
                      </h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Jan 8, 2027</span
                        ><!----><!---->
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-orange-400/10 text-orange-400 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Development</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-14.jpg"
                        alt="Do some projects on React Native with Flutter"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Design marketing assets</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Jan 8, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          2</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.88066 3.10905C8.54039 1.44932 11.2313 1.44933 12.8911 3.10906C14.5508 4.76878 14.5508 7.45973 12.8911 9.11946L12.0657 9.94479L11.0051 8.88413L11.8304 8.0588C12.9043 6.98486 12.9043 5.24366 11.8304 4.16972C10.7565 3.09577 9.01526 3.09577 7.94132 4.16971L7.11599 4.99504L6.05533 3.93438L6.88066 3.10905ZM8.88376 11.0055L9.94442 12.0661L9.11983 12.8907C7.4601 14.5504 4.76915 14.5504 3.10942 12.8907C1.44969 11.231 1.44969 8.54002 3.10942 6.88029L3.93401 6.0557L4.99467 7.11636L4.17008 7.94095C3.09614 9.01489 3.09614 10.7561 4.17008 11.83C5.24402 12.904 6.98522 12.904 8.05917 11.83L8.88376 11.0055ZM9.94458 7.11599C10.2375 6.8231 10.2375 6.34823 9.94458 6.05533C9.65169 5.76244 9.17682 5.76244 8.88392 6.05533L6.0555 8.88376C5.7626 9.17665 5.7626 9.65153 6.0555 9.94442C6.34839 10.2373 6.82326 10.2373 7.11616 9.94442L9.94458 7.11599Z"
                              fill="currentColor"
                            />
                          </svg>
                          1</span
                        >
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Marketing</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-15.jpg"
                        alt="Design marketing assets"
                      /> -->
                    </div>
                  </div>
                </div>
                <div
                  draggable="true"
                  class="p-5 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
                  data-draggable="true"
                >
                  <div class="flex items-start justify-between gap-6">
                    <div>
                      <h4 class="mb-5 text-base text-gray-800 dark:text-white/90">Kanban Flow Manager</h4>
                      <div class="flex items-center gap-3">
                        <span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                              fill="currentColor"
                            />
                          </svg>
                          Feb 12, 2027</span
                        ><span class="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                          8</span
                        ><!---->
                      </div>
                      <span
                        class="px-2 py-0.5 text-xs font-medium bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500 mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-medium"
                        >Template</span
                      >
                    </div>
                    <div
                      class="h-6 w-6 shrink-0 overflow-hidden rounded-full border-[0.5px] border-gray-200 dark:border-gray-800"
                    >
                      <!-- <img
                        src="/images/user/user-16.jpg"
                        alt="Kanban Flow Manager"
                      /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
