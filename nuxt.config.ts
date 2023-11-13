import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-swiper', '@pinia/nuxt'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;800&display=swap'
        }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '@/assets/styles.sass',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/colors.sass" as *\n'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://devtwit8.ru/api/v1/page/?path=/'
    }
  },
})
