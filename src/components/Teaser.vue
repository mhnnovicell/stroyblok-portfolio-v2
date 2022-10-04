<template>
  <div
    v-editable="blok"
    class="py-8 mb-6 text-5xl font-bold text-center text-white"
  >
    {{ blok?.headline }}
  </div>

  <!-- Image lazyloading librabry which is installed https://github.com/murongg/vue3-lazyload -->
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
