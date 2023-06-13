<template>
  <form
    class="
      flex
      items-center
      flex-col md:flex-row
      space-y-5 md:space-y-0
      space-x-0 md:space-x-5
      w-full md:w-1/2
      my-10 px-3
    "
    v-if="!tokenSettled"
    @submit.prevent="saveToken"
  >
    <input type="text" placeholder="Enter a token" class="input input-bordered w-full" v-model="token" required />
    <button type="submit" class="btn btn-primary">Save</button>
  </form>

  <div v-if="tokenSettled" class="flex items-center space-x-5 mt-10">
    <h2 class="text-2xl font-black">Token:</h2>
    <p class="max-w-[6rem] truncate text-right">{{ token }}</p>
    <button class="btn btn-outline btn-xs" @click="changeToken">Change token</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['setToken', 'changeToken'])

const token = ref('')
const tokenSettled = ref(false)

const saveToken = () => {
  tokenSettled.value = true
  token.value = token.value.trim()

  emit('setToken', token.value)
}

const changeToken = () => {
  tokenSettled.value = false
  token.value = ''

  emit('changeToken')
}
</script>