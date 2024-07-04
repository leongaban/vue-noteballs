<template>
  <div
    class="w-full max-w-full mb-8 bg-green-100 rounded-lg border border-green-700 overflow-hidden shadow-lg"
  >
    <form @submit.prevent>
      <div class="px-6 py-4">
        <div class="mb-4">
          <label for="note" class="block text-gray-700 text-sm font-bold mb-2"
            >New Note</label
          >
          <textarea
            id="note"
            v-bind:value="modelValue"
            @input="updateValue"
            class="w-full px-3 py-2 text-gray-700 border border-green-500 rounded-lg focus:outline-none"
            rows="4"
            placeholder="Add new note..."
            ref="newNoteRef"
          ></textarea>
        </div>
        <div class="flex justify-end controls">
          <slot name="buttons"></slot>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

console.log('props', props)

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
