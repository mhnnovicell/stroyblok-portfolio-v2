<template>
  <section v-editable="blok">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-6">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          {{ blok?.name }}
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack.
        </p>
        <label
          for="large-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="large-toggle"
            class="sr-only peer"
          />
          <div
            class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Large toggle</span
          >
        </label>
      </div>
      <div class="lg:mt-0 lg:col-span-6 drop-shadow-lg">
        <p>skills</p>
      </div>
    </div>
  </section>
  <!-- Tjek Storyblok documentation mht foreach og lignende ting man tilføje for at gøre det nemmere at tilføje content osv -->
  <!-- Alternativt se den her video: https://www.youtube.com/watch?v=viV0ROCVEO8 https://www.youtube.com/watch?v=zVISvGMz6xc&t=189s -->
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
