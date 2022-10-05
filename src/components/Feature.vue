<template>
  <div v-editable="blok" class="py-2 text-white">
    <h1 class="text-lg">{{ blok?.name }}</h1>
  </div>
  <h2>Hello world</h2>
  <!-- Tjek Storyblok documentation mht foreach og lignende ting man tilføje for at gøre det nemmere at tilføje content osv -->
  <!-- Alternativt se den her video: https://www.youtube.com/watch?v=viV0ROCVEO8 https://www.youtube.com/watch?v=zVISvGMz6xc&t=189s -->
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
