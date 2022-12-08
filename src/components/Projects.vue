<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div
        class="mr-auto place-self-center lg:col-span-6 w-2/4 p-16 ml-5"
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
        class="lg:mt-0 w-1/2 flex flex-row flex-wrap justify-start items-center pl-5 mr-auto place-self-center"
        data-aos="fade-left"
      >
        <Vue3Marquee :pauseOnHover="true">
          <div class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8">
            <img
              :alt="blok?.kurtNImage.alt"
              :height="blok?.kurtNImage.height"
              :width="blok?.kurtNImage.width"
              class="h-auto w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              v-lazy="{
                src: blok?.kurtNImage.filename,
                loading: 'https://via.placeholder.com/150',
              }"
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
          <div class="max-w-sm bg-indigo-900 rounded-lg shadow p-4 m-8">
            <img
              :alt="blok?.veganSearchImage.alt"
              :height="blok?.veganSearchImage.height"
              :width="blok?.veganSearchImage.width"
              class="h-auto w-1/2 rounded-t-lg object-contain mix-blend-multiply m-auto"
              v-lazy="{
                src: blok?.veganSearchImage.filename,
                loading: 'https://via.placeholder.com/150',
              }"
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
        </Vue3Marquee>
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

const checkboxIsActive = ref(false);
</script>
