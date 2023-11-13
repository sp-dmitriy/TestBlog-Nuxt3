<template lang="pug">
section.image_block
  img.image_block__image(:src='data.src', :alt='data.caption')
  span.image_block__text
    | {{ data.caption }}
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
})

</script>

<style lang="sass" scoped>
@import './image_block.sass'
</style>