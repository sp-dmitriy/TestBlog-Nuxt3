import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    type: '',
  }),

  getters: {
    getType: state => state.type,
    isHome: state => state.type === 'home'
  },
  actions: {
    setType(type) {
      this.type = type
    },
  },
})
