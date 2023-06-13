<template>
  <form
    class="
      flex
      items-center
      flex-col md:flex-row
      my-10 px-3
      space-y-5 md:space-y-0
      space-x-0 md:space-x-5
      w-full max-w-5xl
    "
    @submit.prevent="generateImage"
  >
    <input
      v-model="prompt"
      class="hidden sm:block input input-bordered w-full"
      type="text"
      placeholder="Enter a text to generate image"
      :disabled="generatingImage"
    />
    <textarea
      v-model="prompt"
      class="block sm:hidden textarea textarea-bordered w-full"
      placeholder="Enter a text to generate image"
    ></textarea>

    <select v-model="size" class="select select-bordered w-full max-w-max">
      <option selected>1024x1024</option>
      <option>512x512</option>
      <option>256x256</option>
    </select>

    <input
      v-model="n"
      class="input input-bordered w-20"
      type="number"
      min="1"
      max="10"
      :disabled="generatingImage"
    />

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="generatingImage || !prompt"
    >
      <span v-if="generatingImage" class="loading loading-spinner loading-md"></span>
      <span v-else="generatingImage">Generate</span>
    </button>
  </form>
</template>

<script setup lang="ts">
defineProps(['generatingImage'])
const emit = defineEmits(['generateImage'])
const prompt = ref('')
const size = ref('1024x1024')
const n = ref(1)

const generateImage = async () => {
  emit('generateImage', prompt.value, n.value, size.value)
}
</script>