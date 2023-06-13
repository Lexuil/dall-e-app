<template>
  <p v-if="generateError" class="text-red-500 mx-5">{{ generateError }}</p>
</template>

<script setup lang="ts">
defineProps(['generateError'])
</script>