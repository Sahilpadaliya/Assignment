import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    validUsers: [
      { username: 'abc', password: 'abc@123' },
      { username: 'abcd', password: 'abcd@123' }
    ]
  }),
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    login(username, password) {
      const found = this.validUsers.find(
        user => user.username === username && user.password === password
      )
      if (found) {
        this.user = found
        return true
      }
      return false
    },
    logout() {
      this.user = null
    }
  }
})




