<template>
  <div v-editable="blok" class="flex py-8 mb-6">
    <div
      v-for="blokcolumn in blok?.columns"
      :key="blokcolumn._uid"
      class="flex-auto px-6"
    >
      <StoryblokComponent :blok="blokcolumn" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>
