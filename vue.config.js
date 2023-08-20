const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // Prefer the Sass syntax
        // If you prefer to use SCSS syntax, change this to 'scss'
        implementation: require('sass')
      }
    }
  }
})
