<template>
  <section v-editable="blok">
    <div
      class="flex max-w-screen-xl md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12 flex-col md:flex-row"
    >
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
          class="max-w-xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          {{ blok?.description }}
        </p>
      </div>
      <div
        class="lg:mt-0 lg:col-span-5 col-span-12 lg:flex drop-shadow-lg"
        data-aos="fade-left"
      >
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          :href="blok?.image.filename"
          type="image/webp"
        />

        <img
          v-lazy="{
            src: blok?.image.filename,
            loading: 'https://via.placeholder.com/150',
          }"
          class="rounded-lg border-8 border-indigo-900"
          :alt="blok?.image.alt"
          :width="blok?.image.width"
          :height="blok?.image.height"
          :title="blok?.image.title"
        />
      </div>
    </div>
  </section>

  <!-- Image lazyloading librabry which is installed https://github.com/murongg/vue3-lazyload -->
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
