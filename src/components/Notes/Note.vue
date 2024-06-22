<template>
  <div
    class="w-full max-w-full mb-8 overflow-hidden border rounded-lg border-gray-400 shadow-lg bg-white"
  >
    <div class="px-6 py-4">
      <!-- <div class="font-bold text-xl mb-2">Card Title</div> -->
      <p class="text-gray-700 text-base">
        {{ note.content }}
      </p>
      <div class="flex justify-end">
        <small class="text-right">{{ characterLength }}</small>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-end">
      <div class="flex space-x-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click.prevent="handleDeleteClicked(note.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

let characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

const emit = defineEmits(['delete-clicked'])

const handleDeleteClicked = (id: string) => {
  emit('delete-clicked', id)
}

const props = defineProps<{
  note: {
    id: string
    content: string
  }
}>()
</script>
