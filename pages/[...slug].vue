<template>
  <component 
    v-for="item in data.body" 
    :key="item.id" 
    :is="dynamicComponent(item.type)" 
    :data="item.data"
  />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePageStore } from '~/stores/page.js'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const pageStore = usePageStore()

const { data, pending, error, refresh  } = await useFetch(`${runtimeConfig.public.apiBase}${route.params.slug}`)
pageStore.setType(data.value.page_type)

useSeoMeta({
  title: data.value.meta.title,
  description: data.value.meta.description,
})


const dynamicComponent = (type)=> {
  return defineAsyncComponent(() => import(`~/components/${type}.vue`))
}

</script>