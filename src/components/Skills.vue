<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex-col md:flex-row"
    >
      <div
        class="lg:mt-0 md:w-1/2 mt-4 md:mt-0 w-full flex flex-row flex-wrap justify-start items-center md:pl-5 mr-auto place-self-center order-2 md:order-1"
        data-aos="fade-right"
        v-if="checkboxIsActive"
      >
        <div
          class="max-w-md flex flex-row flex-wrap justify-start items-center"
        >
          <div
            class="w-auto h-auto p-2 mr-2 my-3 bg-indigo-900 rounded-lg border border-indigo-900 shadow-md flex flex-col justify-center items-center"
            v-for="(
              designSkillsImages, designSkillImagesIdx
            ) in blok?.designSkillImages"
            :key="designSkillImagesIdx"
          >
            <img
              class="w-10 h-10 mx-auto max-w-lg"
              :alt="designSkillsImages.alt"
              v-lazy="{
                src: designSkillsImages.filename,
                loading: 'https://via.placeholder.com/150',
              }"
              :width="designSkillsImages.width"
              :height="designSkillsImages.height"
              :title="designSkillsImages.title"
            />
          </div>
        </div>
      </div>
      <div
        class="lg:mt-0 md:w-1/2 mt-4 md:mt-0 w-full flex flex-row flex-wrap justify-start items-center md:pl-5 mr-auto place-self-center order-2 md:order-1"
        data-aos="fade-right"
        v-else
      >
        <div
          class="max-w-md flex flex-row flex-wrap justify-start items-center"
        >
          <div
            class="w-auto h-auto p-2 mr-2 my-3 bg-indigo-900 rounded-lg border border-indigo-900 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
            v-for="(webSkillsImages, webSkillImagesIdx) in blok?.webSkillImages"
            :key="webSkillImagesIdx"
          >
            <img
              class="w-10 h-10 mx-auto max-w-lg"
              :alt="webSkillsImages.alt"
              v-lazy="{
                src: webSkillsImages.filename,
                loading: 'https://via.placeholder.com/150',
              }"
              :width="webSkillsImages.width"
              :height="webSkillsImages.height"
              :title="webSkillsImages.title"
            />
          </div>
        </div>
      </div>
      <div
        class="mr-auto place-self-center col-span-12 lg:col-span-6 md:w-2/4 w-full md:p-16 md:ml-5 order-1 md:order-2"
        data-aos="fade-left"
      >
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
        >
          {{ blok?.name }}
        </h1>
        <p
          data-aos="fade"
          v-if="checkboxIsActive"
          class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          {{ blok?.designDescription }}
        </p>
        <p
          data-aos="fade"
          v-else
          class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          {{ blok?.webDescription }}
        </p>
        <label
          for="large-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="large-toggle"
            class="sr-only peer"
            v-model="checkboxIsActive"
          />
          <div
            class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-100 dark:peer-focus:ring-green-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-green-100"
          ></div>

          <span
            data-aos="fade"
            v-if="checkboxIsActive"
            class="ml-3 text-sm font-medium text-white"
            >Design</span
          >
          <span
            v-else
            class="ml-3 text-sm font-medium text-white"
            data-aos="fade"
            >Web</span
          >
        </label>
      </div>
    </div>
  </section>
  <!-- Tjek Storyblok documentation mht foreach og lignende ting man tilf??je for at g??re det nemmere at tilf??je content osv -->
  <!-- Alternativt se den her video: https://www.youtube.com/watch?v=viV0ROCVEO8 https://www.youtube.com/watch?v=zVISvGMz6xc&t=189s -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({ blok: Object });

const checkboxIsActive = ref(false);
</script>
