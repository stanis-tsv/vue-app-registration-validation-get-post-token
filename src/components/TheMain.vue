<template>
  <section class="container">
    <main>
      <h1>Test assignment for front-end developer</h1>
      <p class="text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
      <the-button><a href="#register">Sign up</a></the-button>
    </main>
  </section>
</template>

<script>
import TheButton from './TheButton'

export default {
	components: { TheButton },

}
</script>

<style lang="sass" scoped>
.container
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/main.jpeg) no-repeat
  background-position: center bottom
  background-size: cover
  display: flex
  flex-direction: column
  align-items: center
  main
    width: 380px
    text-align: center
    padding: 164px 0
    color: #FFFFFF
    z-index: 1
    h1 
      font-size: 40px
      line-height: 40px
      margin: 0
    .text
      @include font-prop
      margin: 21px 0 32px

@media screen and (max-width: 1024px)
  .container
    main
      padding: 89px 0
@media screen and (max-width: 768px)
  .container
    padding: 0 16px
    main
      width: 328px
      padding: 40px 0 71px
</style>