<template lang="pug">
section.slider_block
  Swiper.slider_block__swiper(:height='300', :modules='[SwiperAutoplay, SwiperEffectCreative]', :slides-per-view='1', :loop='true', :effect="'creative'", :autoplay='{\
  delay: 8000,\
  disableOnInteraction: true\
  }', :creative-effect="{\
  prev: {\
  translate: ['-100%', 0, 0]\
  },\
  next: {\
  translate: ['100%', 0, 0]\
  }\
  }")
    SwiperSlide(v-for='(slide, idx) in data', :key='idx')
      img.slider_block__image(:src='slide')
      div {{ idx + 1 }}/{{ data?.length }}
    SwiperControls
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
  },
})
</script>

<style lang="sass" scoped>
@import './slider_block.sass'
</style>