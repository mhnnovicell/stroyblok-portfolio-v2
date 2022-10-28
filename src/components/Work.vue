<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12 md:flex-row flex-col"
    >
      <div
        class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12 order-2 md:order-1"
        data-aos="fade-left"
      >
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative antialiased text-sm">
              <!-- Vertical bar running through middle -->
              <div
                class="hidden sm:block w-1 bg-indigo-900 absolute h-full left-1/2 transform -translate-x-1/2"
              ></div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.rosiDigitalHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.rosiCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.rosiYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.rosiDigitalDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.verticaHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.verticaCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.verticaYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.verticaDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.generaxionHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.generaxionCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.generaxionYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.generaxionDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.livehouseHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.livehouseCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.livehouseYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.livehouseDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.novicellHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.novicellCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.novicellYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.novicellDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.nozebraHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.nozebraCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.nozebraYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.nozebraDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0" data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-indigo-900 rounded-lg shadow">
                        <h2 class="text-white my-2 text-lg font-bold">
                          {{ blok?.nozebraGraduateHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.nozebraGraduateCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.nozebraGraduateYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.nozebraGraduateDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mr-auto place-self-center lg:col-span-6 col-span-12 md:w-2/4 md:p-16 md:ml-5 w-full order-1 md:order-2"
        data-aos="fade-right"
      >
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
        >
          {{ blok?.headline }}
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          {{ blok?.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
