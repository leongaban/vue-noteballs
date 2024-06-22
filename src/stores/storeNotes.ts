// stores/counter.js
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
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
      ],
    }
  },
  actions: {
    addNote(newNote: string) {
      let currentDate = new Date().getTime()
      let id = currentDate.toString()
      let note = {
        id,
        content: newNote,
      }

      this.notes.unshift(note)
    },
    editNote() {},
    removeNote(id: string) {
      this.notes = this.notes.filter(note => note.id !== id)
    },
  },
})
