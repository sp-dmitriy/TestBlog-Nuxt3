<template lang="pug">
section.article_intro_block
  img.article_intro_block__image(:src='data.image', :alt='data.title')
  .article_intro_block__content
    h1.article_intro_block__title {{ data.title }}
    .article_intro_block__info.reading  {{ data.reading_time  }} мин время чтения
    .article_intro_block__info.views  {{ data.views_count  }} прочитали статью
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>

<style lang="sass" scoped>
@import './article_intro_block.sass'
</style>