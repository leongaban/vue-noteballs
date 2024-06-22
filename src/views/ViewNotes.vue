<template>
  <div class="notes">
    <h1 class="m-5 text-3xl">Notes</h1>

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

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

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

const deleteNote = (id: string) => {
  console.log('Delete note:', id)
  notes.value = notes.value.filter(note => note.id !== id)
}
</script>

<style scoped></style>
