<template>
  <section v-editable="blok">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          {{ blok?.headline }}
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack.
        </p>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex drop-shadow-lg">
        <img
          v-lazy="{
            src: blok?.image.filename,
            loading: 'https://via.placeholder.com/150',
          }"
          class="rounded-lg"
          :alt="blok?.image.filename"
        />
      </div>
      <h2>Hello world</h2>
    </div>
  </section>

  <!-- Image lazyloading librabry which is installed https://github.com/murongg/vue3-lazyload -->
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
