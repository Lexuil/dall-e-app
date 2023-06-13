<template>
  <main class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-5xl font-black">
      A simple Dall-e App
    </h1>

    <form v-if="!tokenSettled" class="flex items-center my-10 space-x-5" @submit.prevent="saveToken">
      <input type="text" placeholder="Enter a token" class="input input-bordered w-full" v-model="token" />
      <button type="submit" class="btn btn-primary" >Save</button>
    </form>

    <div v-if="tokenSettled" class="flex items-center space-y-5 my-10">
      <p>{{ token }}</p>
      <button class="btn btn-primary" @click="changeToken">Change token</button>
    </div>
  </main>
</template>

<script setup lang="ts">
// Meta data
useMeta()

const token = ref('')
const tokenSettled = ref(false)

const saveToken = () => {
  tokenSettled.value = true
}

const changeToken = () => {
  tokenSettled.value = false
  token.value = ''
}
</script>