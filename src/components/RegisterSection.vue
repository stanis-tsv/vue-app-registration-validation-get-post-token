<template>
  <section class="request-container">
    <h2 class="request-h2">Working with POST request</h2>
    <div class="success" v-if="$store.state.success">
      <img src="../assets/success.svg" alt="success">
    </div>
    <form class="form" @submit.prevent="submit" v-else>

      <div class="form-control">
        <input 
          type="text" 
          v-model="v$.name.$model" 
          :class="{error: v$.name.$error}"
        />
        <span :class="['placeholder', {placeholderError: v$.name.$error, keepFocused: name.length}]">Your name</span>
        <small v-for="(error, index) in v$.name.$errors" :key="index">{{ error.$message }}</small>
      </div>
      
      <div class="form-control">
        <input 
          type="email" 
          v-model="v$.email.$model" 
          :class="{error: v$.email.$error}"
        />
        <span :class="['placeholder', {placeholderError: v$.email.$error, keepFocused: email.length}]">Email</span>
        <small v-for="(error, index) in v$.email.$errors" :key="index">{{ error.$message }}</small>
      </div>

      <div class="form-control">
        <input 
          type="tel" 
          v-model="v$.phone.$model" 
          :class="{error: v$.phone.$error}"
        />
        <span :class="['placeholder', {placeholderError: v$.phone.$error, keepFocused: phone.length}]">Phone</span>
        <small v-for="(error, index) in v$.phone.$errors" :key="index">{{ error.$message }}</small>
        <small class="textDark" v-if="phone && phone.length < 13">Phone should begins with "+380"</small>
      </div>

      <div class="radio-btns">
        <h3>Select your position</h3>
        <div class="radio-btn" v-for="r in $store.state.radio" :key="r.id">
          <input 
            type="radio" 
            :id="r.id" 
            name="radio" 
            :value="r.id" 
            v-model="v$.position.$model"
          />
          <label :for="r.id">{{ r.name }}</label>
        </div>
        <small v-for="(error, index) in v$.position.$errors" :key="index">{{ error.$message }}</small>
      </div>

      <div class="file-form-control">
        <label for="file-input" :class="{error: v$.photo.$error || (photo && !isPhotoWeight) || (photo && !isPhotoSize)}">
          <input 
            type="file" 
            id="file-input" 
            hidden 
            accept=".jpg, .jpeg" 
            @change="uploadPhoto" 
          />
          <span :class="['custom-file-btn', {errorBtn: v$.photo.$error || (photo && !isPhotoWeight) || (photo && !isPhotoSize)}]">Upload</span>
          <span :class="['file-name', {textDark: photo}]">{{ fileName }}</span>
        </label>
        <small v-for="(error, index) in v$.photo.$errors" :key="index">{{ error.$message }}</small>
        <small v-if="photo && !isPhotoWeight">Photo should be less than 5 MB</small>
        <small v-if="photo && !isPhotoSize">Photo size must be more than 70x70 pixels</small>
      </div>
      <the-button :disabled="v$.$errors.length">Sign up</the-button>
    </form>
  </section>
</template>

<script>
import { required, alpha, integer, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import TheButton from './TheButton'
const regexp = /^[\+]{0,1}380([0-9]{9})$/
const regexPhone = helpers.regex(regexp)

export default {
  components: {TheButton},

  data() {
    return {
      v$: useVuelidate(),
      reg: regexp,
      name: '',
      email: '',
      phone: '',
      position: null,
      photo: null,
      isPhotoWeight: null,
      isPhotoSize: null,
      fileName: 'Upload your photo',
      result: null
    }
  },

  validations () {
    return {
      name: { required, alpha, minLength: minLength(2), maxLength: maxLength(60) },
      email: { required, email },
      phone: { required, regexPhone, maxLength: maxLength(13) },
      position: { required, integer },
      photo: { required }
    }
  },

  methods: {
    uploadPhoto(event) {
      this.photo = event.target.files[0]
      this.fileName = this.photo.name
      this.isPhotoWeight = this.photo.size / 1024 / 1024 < 5 ? true : false
      const img = new Image()
      img.src = window.URL.createObjectURL(this.photo)
      img.onload = () => this.isPhotoSize = img.width > 69 && img.height > 69 ? true : false
    },

    async submit() {
      this.result = await this.v$.$validate()
      if (!this.result) {
        return 
      }

      let formData = new FormData() 
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('phone', this.phone)
      formData.append('position_id', this.position) 
      formData.append('photo', this.photo)

      await this.$store.dispatch('register', formData)

      await this.$store.dispatch('loadUsers')

      this.name = '',
      this.email = '',
      this.phone = '',
      this.position = null,
      this.photo = null,
      this.isPhotoWeight = null,
      this.isPhotoSize = null,
      this.fileName = 'Upload your photo'
      this.v$.$reset()
    }
  }
}
</script>

<style lang="sass" scoped>
.success
  margin: 50px auto
  img
    width: 100%
    height: auto
.form
  width: 346px
  margin: 0 auto
  .form-control
    position: relative
    margin-bottom: 50px
    input
      width: 100%
      padding: 13px 16px
      background-color: transparent
      border: 1px solid #D0CFCF
      border-radius: 4px
      @include font-prop
      color: $text-dark
      outline: none
    input.error
      border: 2px solid #CB3D40
    .placeholder
      position: absolute
      top: 14px
      left: 15px
      @include font-prop
      color: #7E7E7E
      transition: .3s
    input:focus + .placeholder,
    .keepFocused
      transform: translateX(-3px) translateY(-20px)
      background: #F8F8F8
      padding: 0 5px
      font-size: 12px
      line-height: 14px 
      transition: .3s
    .placeholderError
      color: #CB3D40
  .file-form-control
    margin-bottom: 50px
    label
      display: flex
      width: 100%
      padding: 13px 16px
      border: 1px solid #D0CFCF
      border-radius: 4px
      @include font-prop
      color: #7E7E7E
      outline: none
      position: relative
      cursor: pointer
    .custom-file-btn
      position: absolute
      top: -1px 
      left: -1px
      padding: 13px 15px
      border: 1px solid $text-dark
      border-radius: 4px 0 0 4px
      color: $text-dark
      cursor: pointer
    .error
      border: 2px solid #CB3D40
    .errorBtn
      border: none
      padding-top: 14px
      top: 0 
      left: 0
      border-right: 2px solid #CB3D40
    .file-name
      margin-left: 85px
      overflow: hidden
      text-overflow: ellipsis
      &:hover
        overflow: visible
  .radio-btns
    color: $text-dark
    text-align: left
    margin-bottom: 47px
    .radio-btn
      display: flex
      align-items: center
      margin-bottom: 7px
      input
        appearance: none
        margin: 0 12px 0 0
      input:after
        content: ''
        display: flex
        width: 20px
        height: 20px
        background: url(../assets/radio.svg)
        background-size: 20px 20px
        cursor: pointer
      input:checked:after
        background: url(../assets/radio-active.svg)
      label
        @include font-prop
small
  display: block
  text-align: left
  margin: 4px 0 0 18px
  color: #CB3D40
  font-size: 12px
  line-height: 14px

.textDark
  color: $text-dark

@media screen and (max-width: 768px)
  .request-container
    padding: 0 16px
    .form
      width: 328px
      margin: 0 auto
      .form-control
        input
          width: 296px
      .file-form-control
        label
          width: 296px
</style>