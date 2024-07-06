<template>
  <div class="mt-2">
    <AddEditNote
      v-model="noteContent"
      placeholder="Edit a current note"
      label="Edit Note"
      bgColor="blue"
    >
      <template #buttons>
        <button type="button" :class="btnCancelStyles" @click="$router.back()">
          Cancel
        </button>

        <button
          type="submit"
          :class="{
            [btnSubmitStyleOn]: noteContent.trim() !== '',
            [btnSubmitStyleDisabled]: noteContent.trim() === '',
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

const btnCancelStyles = ref(
  'mr-3 bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded',
)
const btnSubmitStyleOn = ref(
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
)
const btnSubmitStyleDisabled = ref(
  'bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed',
)

// ? Load Selected Note
const loadNote = () => {
  const note = notesStore.notes.find(note => note.id === noteId)
  if (note) {
    noteContent.value = note.content
  } else {
    console.error('Note not found')
  }
}

// ? Edit Note Submit
const handleSubmit = () => {
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
