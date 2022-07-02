<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link class="btn btn-danger" to="#/update">X</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
