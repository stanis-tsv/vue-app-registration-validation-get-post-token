<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.btn
  width: 100px
  height: 34px
  background-color: #F4E041
  border: none
  outline: none
  border-radius: 80px
  @include font-prop
  cursor: pointer
  transition: .3s
  &:hover
    background-color: #FFE302
    transition: .3s
.sm-btn
  width: 120px
.btn:disabled
  background-color: #B4B4B4
  cursor: default
  color: rgba(255, 255, 255, 0.87)
</style>