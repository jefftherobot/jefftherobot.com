<template lang="pug">
  #app
    PoemList
</template>

<script>
import PoemList from './components/PoemList.vue'

export default {
  components: {
    PoemList
  }
}
</script>

<style lang="postcss">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>