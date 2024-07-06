<template>
  <div class="stats-page p-4">
    <table
      class="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden"
    >
      <thead>
        <tr class="bg-purple-500 text-white">
          <th class="px-4 py-2 text-left">Stat</th>
          <th class="px-4 py-2 text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t">
          <td class="px-4 py-2">Number of Notes</td>
          <td class="px-4 py-2">{{ notesCount }}</td>
        </tr>
        <tr class="border-t">
          <td class="px-4 py-2">Number of Characters (of all notes)</td>
          <td class="px-4 py-2">{{ charactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNotesStore } from '@/stores/storeNotes'

const notesCount = ref(0)
const charactersCount = ref(0)
const notesStore = useNotesStore()

notesCount.value = notesStore.totalNotesCount()
charactersCount.value = notesStore.getAllCharacters()
</script>
