import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('storeNotes', () => {
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

  function addNote(newNote: string) {
    let currentDate = new Date().getTime()
    let id = currentDate.toString()
    let note = {
      id,
      content: newNote,
    }

    notes.value.unshift(note)
  }

  function editNote(id: string, newContent: string) {
    const note = notes.value.find(note => note.id === id)
    if (note) {
      note.content = newContent
    }
  }

  function removeNote(id: string) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  return { notes, addNote, editNote, removeNote }
})
