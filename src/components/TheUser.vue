<template>
  <div class="card">
    <div class="photo">
      <img :src="user.photo" alt="avatar">
    </div>
    <div class="info">
      <div class="name">
        {{ user.name }}
        <span class="tooltip">{{ user.name }}</span>
      </div>
      <div class="position">{{ user.position }}</div>
      <div class="email">
        {{ user.email }}
        <span class="tooltip">{{ user.email }}</span>
      </div>
      <div class="phone">{{ user.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="sass" scoped>
.card
  width: 325px
  padding: 20px
  @include font-prop
  background-color: #FFFFFF
  border-radius: 10px
  .photo
    height: 70px
    img
      width: 70px
      height: 70px
      border-radius: 50%
      overflow: hidden
  .info > div
    display: block
    height: 26px
    overflow: hidden
    text-overflow: ellipsis
    cursor: pointer
    span
      display: none
    &:hover span
      display: block
      position: absolute
      margin-top: 10px
      margin-left: 80px
      background-color: $text-dark
      padding: 3px 16px
      border-radius: 4px
      @include font-prop
      color: #fff
      word-break: break-word
  .name
    margin: 20px 0

@media screen and (max-width: 1170px)
  .card
    width: 242px
@media screen and (max-width: 1024px)
  .card
    width: 304px
@media screen and (max-width: 768px)
  .card
    width: 328px
</style>