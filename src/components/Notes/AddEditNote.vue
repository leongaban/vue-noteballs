<template>
  <div
    class="w-full max-w-full mb-8 rounded-lg border overflow-hidden shadow-lg"
    :class="`bg-${props.bgColor}-100 border-${props.bgColor}-700`"
  >
    <form @submit.prevent>
      <div class="px-6 py-4">
        <div class="mb-4">
          <label
            v-if="props.label"
            for="note"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            {{ props.label }}
          </label>
          <textarea
            id="note"
            v-bind:value="props.modelValue"
            @input="updateValue"
            class="w-full px-3 py-2 text-gray-700 border-2 rounded-lg"
            :class="`border-${props.bgColor}-700`"
            rows="4"
            :placeholder="props.placeholder"
            ref="textAreaRef"
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
import { defineProps, defineEmits, ref } from 'vue'

const textAreaRef = ref<HTMLTextAreaElement | null>(null)

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'green',
  },
  placeholder: {
    type: String,
    default: 'Type something...',
  },
  label: {
    type: String,
  },
})

console.log('props', props)

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const focusTextArea = () => {
  console.log('Focus Text Area')
  textAreaRef.value?.focus()
}

defineExpose({
  focusTextArea,
})
</script>
