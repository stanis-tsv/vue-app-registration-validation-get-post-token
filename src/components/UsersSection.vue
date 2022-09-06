<template>
  <section class="request-container">
    <h2 class="request-h2">Working with GET request</h2>
    <div class="user">
      <TheUser v-for="user in $store.state.users" :key="user.id" :user="user" />
    </div>
    <div class="loader" v-if="$store.state.loading"></div>
    <the-button 
      class="sm-btn" 
      @click="$store.dispatch('loadUsers', $store.state.page++)"
      v-if="!$store.state.totalUsers"
    >Show more</the-button>
  </section>
</template>

<script>
import TheButton from './TheButton'
import TheUser from './TheUser'
export default {
	components: { TheButton, TheUser }
}
</script>

<style lang="sass" scoped>
.request-container
  text-align: center
  .user
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: 29px 
    margin-bottom: 50px
  .loader 
    width: 48px
    height: 48px
    margin: 0 auto 50px
    background: url(../assets/loader.svg)
    animation: spin 2s linear infinite
  @keyframes spin 
    0% 
      transform: rotate(0deg) 
    100%
      transform: rotate(360deg)

@media screen and (max-width: 1170px)
  .request-container
    padding: 0 60px
@media screen and (max-width: 1024px)
  .request-container
    padding: 0 32px
    .user
      gap: 16px
@media screen and (max-width: 768px)
  .request-container
    padding: 0 16px
    .user
      gap: 20px
</style>