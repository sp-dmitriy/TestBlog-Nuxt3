<template lang="pug">
section.subscribe_form_block
  h3.subscribe_form_block__title Подпишись на рассылку
  form.subscribe_form_block__form
    input(:class="[inputValue ? 'active' : '', 'input', 'subscribe_form_block__input']", name='email', placeholder='Email', v-model='inputValue')
    button.btn.secondary.subscribe_form_block__btn(:disabled='!inputValue') Подписаться
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref()
</script>

<style lang="sass" scoped>
@import './subscribe_form_block.sass'
</style>