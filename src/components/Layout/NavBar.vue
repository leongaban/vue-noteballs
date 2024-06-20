<!-- NavBar.vue -->
<template>
  <nav class="bg-green-600 w-full">
    <div
      class="container mx-auto p-4 flex justify-between items-center max-w-7xl"
    >
      <div class="text-white text-lg font-bold">Vue NoteBalls</div>
      <div class="hidden md:flex space-x-4">
        <RouterLink
          to="/"
          class="text-white hover:bg-green-700 active:bg-green-500 px-3 py-2 rounded"
          active-class="active-link"
        >
          Notes
        </RouterLink>
        <RouterLink
          to="/stats"
          class="text-white hover:bg-green-700 active:bg-green-500 px-3 py-2 rounded"
          active-class="active-link"
        >
          Stats
        </RouterLink>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden mt-2 space-y-2 px-4">
      <RouterLink
        to="/"
        class="block text-white hover:bg-green-700 active:bg-green-500 px-3 py-2 rounded"
        active-class="active-link"
      >
        Notes
      </RouterLink>
      <RouterLink
        to="/stats"
        class="block text-white hover:bg-green-700 active:bg-green-500 px-3 py-2 rounded"
        active-class="active-link"
      >
        Stats
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Additional styling can go here */
.active-link {
  background-color: #48bb78; /* Adjust to a lighter green if needed */
}
</style>
