<template>
  <section v-editable="blok">
    <div class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
           data-aos="fade-left">
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div class="relative antialiased text-sm">
              <!-- Vertical bar running through middle -->
              <div class="hidden sm:block w-1 bg-indigo-900 absolute h-full left-1/2 transform -translate-x-1/2"></div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.rosiDigitalHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.rosiCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.rosiYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.rosiDigitalDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">

                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">

                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>

                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.verticaHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.verticaCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.verticaYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.verticaDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.generaxionHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.generaxionCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.generaxionYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.generaxionDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.livehouseHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.livehouseCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.livehouseYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.livehouseDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.novicellHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.novicellCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.novicellYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.novicellDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mt-0 sm:mb-12"
                   data-aos="fade-right">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.nozebraHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.nozebraCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.nozebraYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.nozebraDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0"
                   data-aos="fade-left">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded-lg shadow">
                        <h2 class="text-black my-2 text-lg font-bold">
                          {{ blok?.nozebraGraduateHeadline }}
                        </h2>
                        <p class="my-2 text-md text-gray-500 font-medium">
                          {{ blok?.nozebraGraduateCompanyName }}
                        </p>
                        <span
                              class="my-2 bg-indigo-300 font-light text-black p-2 rounded-lg leading-none flex items-center w-3/4">{{
                              blok?.nozebraGraduateYear }}</span>

                        <p class="my-2 font-light text-gray-500">
                          {{ blok?.nozebraGraduateDescription }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                       class="rounded-full bg-white border-indigo-900 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke-width="1.5"
                         stroke="currentColor"
                         class="h-5 w-5 text-indigo-900">
                      <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-auto place-self-center lg:col-span-6 w-2/4 p-16 ml-5"
           data-aos="fade-right">
        <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          {{ blok?.headline }}
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ blok?.description }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
