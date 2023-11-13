<template lang="pug">
section.cta_form_block
  img.cta_form_block__image(src='~/assets/img/cta_form_block.jpg', alt='form')
  .cta_form_block__content
    h2.cta_form_block__title Стань участником проекта
    form.cta_form_block__form
      input(:class="[inputName ? 'active' : '', 'input', 'cta_form_block__input']", name='name', placeholder='Имя', v-model='inputName')
      input(:class="[inputPhone ? 'active' : '', 'input', 'cta_form_block__input']", name='phone', placeholder='Телефон', v-model='inputPhone')
      input(:class="[inputEmail ? 'active' : '', 'input', 'cta_form_block__input']", name='email', placeholder='Email', v-model='inputEmail')
      button.btn.secondary.cta_form_block__button(:disabled='isDisabled') Присоединиться
</template>

<script setup>
import { computed, ref } from 'vue'
const inputName = ref()
const inputPhone = ref()
const inputEmail = ref()
const isDisabled = computed(() => !inputName.value && !inputPhone.value && !inputEmail.value)
</script>

<style lang="sass">
@import './cta_form_block.sass'
</style>