<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.menu{
  width: 100%;
  background-color: #472289;
  padding: .5rem 1rem;
  color: white;
  display: flex;
}
*{
  margin: 0;
  padding: 0;
}
a {
  color: #42b983;
  text-decoration: none;
}
button{
  padding: .5rem 1rem;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: .1rem;
  outline: none;
}
</style>
