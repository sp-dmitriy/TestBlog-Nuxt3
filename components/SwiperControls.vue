<script setup lang="ts">
const swiper = useSwiper()
</script>

<template lang="pug">
button.slider-btn.prev(@click.stop='swiper.slideNext()')
  img(src='~/assets/img/prev.svg', alt='prev')
button.slider-btn.next(@click.stop='swiper.slidePrev()')
  img(src='~/assets/img/next.svg', alt='next')
</template>

<style lang="sass">
.slider-btn
  z-index: 1000
  width: 60px
  height: 60px
  display: flex
  justify-content: center
  align-items: center
  background-color: $color-dark
  color: $color-white
  border: 1px solid $color-dark
  position: absolute
  &.prev 
    left: 0
    top: calc(50% - 30px)
  &.next 
    right: 0
    top: calc(50% - 30px)

@media (max-width: 1060px)
  .slider-btn
    background-color: transparent
    color: $color-dark
    border: 1px solid transparent
    
@media (max-width: 870px)
  .slider-btn
    display: none
</style>