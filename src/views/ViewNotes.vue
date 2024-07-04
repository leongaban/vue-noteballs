<template>
  <div class="notes">
    <h1 class="m-5 text-3xl">Notes</h1>

    <!-- Adding buttons via named slot -->
    <AddEditNote v-model="newNote">
      <template #buttons>
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          @click="handleSubmit"
        >
          Submit
        </button>

        <button
          type="button"
          class="ml-3 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          @click="handleClear"
        >
          Clear
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useNotesStore } from '@/stores/storeNotes'

const notesStore = useNotesStore()
const { addNote, removeNote } = notesStore
const newNote = ref('')
const newNoteRef = ref<HTMLTextAreaElement | null>(null)

// ? Submit, Clear & Delete Notes

const handleSubmit = () => {
  console.log('New Note:', newNote.value)

  if (newNote.value.trim() === '') {
    return
  }

  addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value?.focus()
}

const handleClear = () => {
  newNote.value = ''
}

// const editNote = (id: string, content: string) => {
//   console.log('Edit note:', id, content)
// }

const deleteNote = (id: string) => {
  console.log('Delete note:', id)
  removeNote(id)
}
</script>

<style scoped></style>
