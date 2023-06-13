import { Configuration, OpenAIApi } from 'openai'
import type { CreateImageRequestSizeEnum, ImagesResponseDataInner } from 'openai'

export default function () {
  const openai = ref<OpenAIApi>()
  const generatingImage = ref(false)
  const images = ref<ImagesResponseDataInner[]>()
  const generateError = ref('')

  const openaiReady = computed(() => {
    return !!openai.value
  })

  const setToken = (token: string) => {
    const configuration = new Configuration({
      apiKey: token,
    })
    openai.value = new OpenAIApi(configuration)
  }

  const changeToken = () => {
    openai.value = undefined
    images.value = undefined
    generatingImage.value = false
    generateError.value = ''
  }

  const generateImage = async (prompt: string, n: number, size: CreateImageRequestSizeEnum) => {
    if (!openai.value || !prompt) {
      console.error('No token or prompt')
      return
    }

    generatingImage.value = true
    openai.value?.createImage({
      prompt,
      n,
      size
    })
    .then((response) => {
      generatingImage.value = false
      images.value = response?.data.data
      generateError.value = ''
    })
    .catch((error) => {
      generatingImage.value = false
      if (error.response) {
        console.log(error.response.status)
        console.log(error.response.data.error.message)
        generateError.value = error.response.data.error.message
      } else {
        console.log(error.message)
        generateError.value = "Error generating image"
      }
    })
  }

  return {
    openaiReady,
    setToken,
    changeToken,
    generateImage,
    generatingImage,
    images,
    generateError
  }
}