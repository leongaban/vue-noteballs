<template>
  <NavBar />
  <div class="container mx-auto px-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
</script>

<style scoped></style>
