<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex-col md:flex-row"
    >
      <div
        class="lg:mt-0 w-1/2 flex flex-row flex-wrap justify-start items-center pl-5 mr-auto place-self-center"
        data-aos="fade-left"
      >
        <Vue3Marquee :pauseOnHover="true">
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.kurtNImage.alt"
              :height="blok?.kurtNImage.height"
              :width="blok?.kurtNImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.kurtNImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.kurtNHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.kurtNDescription }}
              </p>
              <a
                :href="blok?.kurtNLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.asientoImage.alt"
              :height="blok?.asientoImage.height"
              :width="blok?.asientoImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.asientoImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.asientoHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.asientoDescription }}
              </p>
              <a
                :href="blok?.asientoLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.veganSearchImage.alt"
              :height="blok?.veganSearchImage.height"
              :width="blok?.veganSearchImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.veganSearchImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.veganSearchHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.veganSearchDescription }}
              </p>
              <a
                :href="blok?.veganSearchLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.movieAppImage.alt"
              :height="blok?.movieAppImage.height"
              :width="blok?.movieAppImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.movieAppImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.movieAppHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.movieAppDescription }}
              </p>
              <a
                :href="blok?.movieAppLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.beeroclockImage.alt"
              :height="blok?.beeroclockImage.height"
              :width="blok?.beeroclockImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.beeroclockImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.beeroclockHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.beeroclockDescription }}
              </p>
              <a
                :href="blok?.beeroclockLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8 cursor-pointer flex flex-1 flex-col projects-container"
          >
            <img
              :alt="blok?.cocktailAppImage.alt"
              :height="blok?.cocktailAppImage.height"
              :width="blok?.cocktailAppImage.width"
              class="w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              :src="blok?.cocktailAppImage.filename"
            />

            <div class="p-5">
              <h5 class="text-white mb-2 text-lg font-bold">
                {{ blok?.cocktailAppHeadline }}
              </h5>
              <p class="mb-3 font-light text-gray-400">
                {{ blok?.cocktailAppDescription }}
              </p>
              <a
                :href="blok?.cocktailAppLink.url"
                target="_blank"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-100 rounded-lg hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Se siden
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </Vue3Marquee>
      </div>
      <div
        class="mr-auto place-self-center lg:col-span-7 p-4 col-span-12"
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
  <!-- Tjek Storyblok documentation mht foreach og lignende ting man tilføje for at gøre det nemmere at tilføje content osv -->
  <!-- Alternativt se den her video: https://www.youtube.com/watch?v=viV0ROCVEO8 https://www.youtube.com/watch?v=zVISvGMz6xc&t=189s -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';

defineProps({ blok: Object });
</script>

<style scoped>
.projects-container {
  height: 90%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
