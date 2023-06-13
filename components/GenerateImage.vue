<template>
  <div
    v-if="images"
    class="grid grid-cols-1 gap-5 max-w-5xl mb-10"
    :class="{ 'md:grid-cols-2': images.length > 1 }"
  >
    <div v-for="image in images">
      <a :href="image.url" target="_blank">
        <img :src="image.url" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['images'])
</script>