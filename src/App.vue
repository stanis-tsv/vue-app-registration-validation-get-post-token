<template>
  <div class="black-top"></div>
  <the-header></the-header>
  <div class="content">
    <the-main></the-main>
    <users-section id="users"></users-section>
    <register-section id="register"></register-section>
  </div>
</template>

<script>
import RegisterSection from './components/RegisterSection'
import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import UsersSection from './components/UsersSection'

export default {
	components: { TheHeader, TheMain, UsersSection, RegisterSection },
  mounted() {
    this.$store.dispatch('getRadio')
    this.$store.dispatch('loadUsers')
  }
}
</script>

<style lang="sass">
*
  font-family: Nunito, sans-serif
  font-weight: 400
html
  scroll-behavior: smooth
body
  margin: 0 auto
  padding-bottom: 100px
  background-color: #F8F8F8
a 
  text-decoration: none
  color: $text-dark
.request-container
  margin-top: 140px
  text-align: center
.request-h2
  margin: 0 0 50px
  color: $text-dark
  font-size: 40px
  line-height: 40px

.black-top
  height: 60px
  background-color: #161616
.content
  max-width: 1170px
  margin: 0 auto
</style>
