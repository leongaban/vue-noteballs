import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Note {
  id: string
  content: string
}

interface NotesState {
  notes: Note[]
}

export const useNotesStore = defineStore('storeNotes', () => {
  const notes = ref<Note[]>([
    {
      id: 'id1',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 'id2',
      content: 'Sit amet ipsum dolor lorem.',
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

  function totalNotesCount() {
    return notes.value.length
  }

  function getAllCharacters() {
    return notes.value.reduce((total, note) => total + note.content.length, 0)
  }

  return {
    notes,
    addNote,
    editNote,
    removeNote,
    totalNotesCount,
    getAllCharacters,
  }
})
