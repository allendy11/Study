<template>
  <div class="app">
    <nav>
      <div class="nav_title">
        <router-link to="/">TITLE</router-link>
      </div>
      <div class="nav_items">
        <router-link to="/page1">Page1</router-link>
        <router-link to="/page2">Page2</router-link>
        <router-link to="/page3">Page3</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
</style>
<style scoped>
nav {
  height: 4rem;
  box-shadow: 0 4px 6px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav_title {
  font-size: 1.5rem;
}
.nav_items {
  display: flex;
  justify-content: space-around;
}
</style>
