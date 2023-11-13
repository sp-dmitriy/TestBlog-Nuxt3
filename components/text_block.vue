<template lang="pug">
section.text_block
  .text_block__content(v-html='data')
</template>

<script setup>
const props = defineProps({
  data: {
    type: String,
  },
})

</script>

<style lang="sass">
@import './text_block.sass'
</style>