const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/theme.sass'`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-app-registration-validation-get-post-token/' : '/'
}
