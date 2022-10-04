<template>
  <Suspense>
    <template #default>
      <Home />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped></style>

<script setup lang="ts">
import Home from './pages/Home.vue';
</script>

<script setup></script>
