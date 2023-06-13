<template>
  <main class="flex flex-col items-center">
    <p class="mt-5">
      Developed by <a class="text-primary hover:underline" href="https://github.com/Lexuil/" target="_blank">@Lexuil</a>
    </p>

    <h1 class="text-5xl font-black mt-10 mx-5">
      A simple Dall-e App
    </h1>

    <TokenForm @set-token="setToken" @change-token="changeToken" />
    <GenerateForm
      v-if="openaiReady"
      @generate-image="generateImage"
      :generating-image="generatingImage"
    />
    <GenerateImage :images="images" />
    <ErrorMessage :generate-error="generateError" />
  </main>
</template>

<script setup lang="ts">
useMeta()

const {
  openaiReady,
  setToken,
  changeToken,
  generateImage,
  generatingImage,
  images,
  generateError
 } = useGenerateImage()
</script>