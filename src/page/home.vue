<template>
  <div>
    <nav class="menu">
      <router-link :to="{name: 'index'}">
        User Menu
      </router-link>
    </nav>
    <h2>Esta es una vista de usuario</h2>
    <div class="pa-4">
      <button @click="toAbout()">to About!</button>
      <button @click="toAdmin()">To admin!</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { router } from '../router'
export default {
  data () {
    return {
    }
  },
  methods: {
    toAdmin: function () {
      console.log('go admin view')
      router.push({name: 'admin'})
    },
    toAbout: function () {
      console.log('user about view')
      router.push({name: 'about'})
    }
  }

}
</script>

<style>

</style>
