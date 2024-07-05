<template>
  <div class="mt-2">
    <AddEditNote
      v-model="noteContent"
      placeholder="Edit a current note"
      bgColor="blue"
    >
      <template #buttons>
        <button
          type="submit"
          :class="{
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded':
              noteContent.trim() !== '',
            'bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed':
              noteContent.trim() === '',
          }"
          :disabled="noteContent.trim() === ''"
          @click="handleSubmit"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/storeNotes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const route = useRoute()
const router = useRouter()

const noteContent = ref('')
const notesStore = useNotesStore()
const noteId = route.params.id as string

const loadNote = () => {
  const note = notesStore.notes.find(note => note.id === noteId)
  if (note) {
    noteContent.value = note.content
  } else {
    console.error('Note not found')
  }
}

const handleSubmit = () => {
  console.log('New Note:', noteContent.value)

  if (noteContent.value.trim() === '') {
    return
  }

  notesStore.editNote(noteId, noteContent.value)

  noteContent.value = ''
  // Navigate back to the posts page
  router.push('/#/posts')
}

onMounted(loadNote)
</script>
