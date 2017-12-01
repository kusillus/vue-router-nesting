<template>
  <div>
    <nav class="menu admin">
      <router-link :to="{name:'admin'}">
      Admin Panel
      </router-link>
    </nav>
    <h2>Esta es una vista de administrador</h2>
    <div class="pa-4">
      <button @click="toSettings()">To Admin Settings</button>
      <button @click="toUser()">To User view</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toSettings: function () {
      console.log('admin settings!')
      this.$router.push({name:'adminSettings'})
    },
    toUser: function () {
      console.log('back to user view')
      this.$router.push({name:'index'})
    }

  }

}
</script>

<style lang="scss">
.admin{
  background: #5a66ef;
}
.pa-4{
  padding: 1rem;
}
</style>
