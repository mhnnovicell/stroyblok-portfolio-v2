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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
