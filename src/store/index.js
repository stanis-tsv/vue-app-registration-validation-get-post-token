import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      radio: null,
      users: [],
      page: 1,
      totalUsers: false,
      loading: false,
      token: null,
      userId: null,
      success: null,
      currentUser: null
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getRadio({state}) {
      const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      state.radio = data.positions
    },

    async loadUsers({state}) {
      state.loading = true
      if (state.success) {
        state.users = []
        state.page = 1
      }
      const {data} = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${state.page}&count=6`)
      setTimeout(() => {
        state.users.push(...data.users)
        state.users.sort((a,b) => b.registration_timestamp - a.registration_timestamp)
        state.totalUsers = state.users.length === data.total_users ? true : false
        state.loading = false
      }, 500)
    },

    async getToken({state}) {
       const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
       state.token = data.token
    },

    async getUser({state}) {
      const {data} = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${state.userId}`)
      state.currentUser = data.user.email
    },

    async register({state, dispatch}, formData) {
      await dispatch('getToken')
      const {data} = await axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, { 
        headers: {'Token': state.token} 
      })
      state.userId = data.user_id
      state.success = data.success
      
      await dispatch('getUser')
      setTimeout(() => {
        state.success = null
      }, 3000)
    }

  },
  modules: {
  }
})
