<template lang="pug">
section.article_list_block
  h2.article_list_block__title(v-if='!pageStore.isHome')
    | {{ data.title }}
  .article_list_block__wrapper
    .article_list_block__item(v-for='item in data.articles', :key='item.title')
      img.img(:src='item.image', :alt='item.title')
      h3 {{ item.title }}
      NuxtLink.btn.primary.article_list_block__button(:to='item.link') Читать
</template>

<script setup>
import { usePageStore } from '~/stores/page.js'

const props = defineProps({
  data: {
    type: Object,
  },
})
const pageStore = usePageStore()
</script>

<style lang="sass" scoped>
@import './article_list_block.sass'
</style>