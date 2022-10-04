<template>
  <StoryblokComponent v-if="story" :blok="story.content" class="content" />
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'draft' });
console.log(story, 'story');
</script>

<style scoped lang="scss">
.content {
  /* From https://css.glass */
  background: #2d1b69;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(45, 27, 105, 0.8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(45, 27, 105, 0.1);
}
</style>
