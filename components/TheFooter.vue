<template lang="pug">
footer.footer
  .container
    .footer__inner
      .footer__info
        ui-logo
        p.footer__info-text
          | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности.
      .footer__contacts
        .footer__contacts-label email
        .footer__contacts-email testblogsupport@gmail.com
        .footer__contacts-social
          a.footer__contacts-social-link(href='#')
            img(src='~/assets/img/facebook.svg', alt='facebook')
          a.footer__contacts-social-link(href='#')
            img(src='~/assets/img/vk.svg', alt='vk')
          a.footer__contacts-social-link(href='#')
            img(src='~/assets/img/instagram.svg', alt='instagram')
          a.footer__contacts-social-link(href='#')
            img(src='~/assets/img/telegram.svg', alt='telegram')
    subscribe_form_block
</template>

<style lang="sass" scoped>
@import './TheFooter.sass'
</style>