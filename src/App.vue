<template>
  <div class="container center-content">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/login">
      Login
    </router-link>
    <router-link to="/logout">
      Logout
    </router-link>
    <RouterView />
  </div>
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>
