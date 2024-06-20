<template>
  <div class="notes">
    <h1 class="m-5 text-3xl">Notes</h1>

    <!-- Form Container -->
    <div
      class="w-full max-w-full mb-8 bg-green-100 rounded-lg border border-green-700 overflow-hidden shadow-lg"
    >
      <div class="px-6 py-4">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="note" class="block text-gray-700 text-sm font-bold mb-2"
              >New Note</label
            >
            <textarea
              id="note"
              v-model="newNote"
              class="w-full px-3 py-2 text-gray-700 border border-green-500 rounded-lg focus:outline-none"
              rows="4"
              placeholder="Add new note..."
              ref="newNoteRef"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>

            <button
              type="button"
              @click="handleClear"
              class="ml-3 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Notes Cards -->
    <div v-for="note in notes" :key="note.id">
      <div
        class="w-full max-w-full mb-8 overflow-hidden border rounded-lg border-gray-400 shadow-lg bg-white"
      >
        <div class="px-6 py-4">
          <!-- <div class="font-bold text-xl mb-2">Card Title</div> -->
          <p class="text-gray-700 text-base">
            {{ note.content }}
          </p>
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
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 'id2',
    content: 'Ipsum dolor sit amet lorem.',
  },
  {
    id: 'id3',
    content: 'Dolor sit amet lorem ipsum.',
  },
])

const newNote = ref('')
const newNoteRef = ref<HTMLTextAreaElement | null>(null)

const handleSubmit = () => {
  console.log('New Note:', newNote.value)

  if (newNote.value.trim() === '') {
    return
  }

  let currentDate = new Date().getTime()
  let id = currentDate.toString()
  let note = {
    // id: `id${notes.value.length + 1}`,
    id,
    content: newNote.value,
  }

  notes.value.unshift(note)

  newNote.value = ''

  newNoteRef.value?.focus()
}

const handleClear = () => {
  newNote.value = ''
}
</script>

<style scoped></style>
