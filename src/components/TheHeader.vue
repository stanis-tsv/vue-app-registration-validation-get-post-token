<template>
  <section class="container">
    <header>
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo">
      </div>
      <nav>
        <span class="currentUser" v-if="$store.state.currentUser">{{ $store.state.currentUser }}</span>
        <the-button><a href="#users">Users</a></the-button>
        <the-button class="ml10-btn"><a href="#register">Sign up</a></the-button>
      </nav>
    </header>
  </section>
</template>

<script>
import TheButton from './TheButton'

export default {
  components: {TheButton}
}
</script>

<style lang="sass" scoped>
.container
  background-color: #FFFFFF
  header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 13px 0
    max-width: 1170px
    margin: 0 auto
    .ml10-btn
      margin-left: 10px
    .currentUser
      margin-right: 50px
@media screen and (max-width: 1170px)
  .container
    padding: 0 60px
@media screen and (max-width: 1024px)
  .container
    padding: 0 32px
@media screen and (max-width: 768px)
  .container
    padding: 0 16px
  .currentUser
    display: none
</style>