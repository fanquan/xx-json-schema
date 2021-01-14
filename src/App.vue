<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">首页</router-link>
  <router-link to="/test" style="margin-left:20px">test</router-link>
  <router-link to="/index" style="margin-left:20px">Index页</router-link>
  <router-view></router-view>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
</template>

<script>
import { defineComponent } from 'vue'
import Index from './index.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  props: {},
  components: {
    // HelloWorld,
    // Index,
  },
  setup(props) {
    return {}
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
