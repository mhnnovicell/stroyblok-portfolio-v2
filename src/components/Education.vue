<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12 md:flex-row flex-col"
    >
      <div
        class="mr-auto place-self-center lg:col-span-6 col-span-12 md:p-4 md:w-1/2 w-full"
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
      <div
        class="lg:mt-0 md:w-1/2 w-full flex flex-row flex-wrap justify-start items-center mr-auto place-self-center md:p-16 md:ml-5"
        data-aos="fade-left"
      >
        <div
          class="md:min-h-screen md:py-6 flex flex-col justify-center sm:py-12"
        >
          <div class="md:py-3 sm:max-w-xl sm:mx-auto w-full md:px-2">
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
                          {{ blok?.eaaHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.eaaCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.eaaYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.eaaDescription }}
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
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
                          {{ blok?.videndjursHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.videndjursCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.videndjursYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.videndjursDescription }}
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
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
                          {{ blok?.aarhusakademiHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-400 font-medium">
                          {{ blok?.aarhusakademiCompanyName }}
                        </p>
                        <span
                          class="my-2 font-light text-gray-400 leading-none flex items-center w-3/4"
                          >{{ blok?.aarhusakademiYear }}</span
                        >

                        <p class="my-2 font-light text-gray-400">
                          {{ blok?.aarhusakademiDescription }}
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
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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
