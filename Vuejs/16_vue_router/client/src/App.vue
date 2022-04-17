<template>
  <div>
    <nav>
      <div class="nav_title">
        <router-link to='/'>TITLE</router-link>
      </div>
      <div class="nav_menu">
        <router-link to='/page1'>Page1</router-link>
        <router-link to='/page2'>Page2</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0
  }

</style>
<style scoped>
  nav {
    width: 100vw;
    height: 4rem;
    box-shadow: 0 3px 6px black;
  }
  .nav_title {
    font-size: 2rem;
    padding: 0 0.5rem;
  }
  .nav_menu {
    display: flex;
    justify-content: space-around;
    padding: 0 5rem;
    font-size: 1.2rem;
    
  }
  nav a {
    color: black;
    text-decoration: none;
  }
  .nav_menu a:hover {
    color: rgb(104, 5, 143)
  }
</style>