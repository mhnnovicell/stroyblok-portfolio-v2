<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div
        class="mr-auto place-self-center lg:col-span-6 p-4 w-1/2"
        data-aos="fade-right"
      >
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
        >
          {{ blok?.headline }}
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          {{ blok?.description }}
        </p>
      </div>
      <div
        class="lg:mt-0 w-1/2 flex flex-row flex-wrap justify-start items-center mr-auto place-self-center p-16 ml-5"
        data-aos="fade-left"
      >
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative antialiased text-sm">
              <!-- Vertical bar running through middle -->
              <div
                class="hidden sm:block w-1 bg-indigo-900 absolute h-full left-1/2 transform -translate-x-1/2"
              ></div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.nozebraGraduateHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.nozebraGraduateCompanyName }}
                        </p>
                        <span
                          class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4"
                          >{{ blok?.nozebraGraduateYear }}</span
                        >

                        <p class="my-2 font-light text-gray-500">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded shadow">
                        My life got flipped turned upside down,
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white rounded shadow">
                        And I'd like to take a minute, just sit right there,
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded shadow">
                        I'll tell you how I became the Prince of a town called
                        Bel Air.
                      </div>
                    </div>
                  </div>
                  <div
                    class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
