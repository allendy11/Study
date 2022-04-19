<template>
  <div class="home">
    <h1>This is Home</h1>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeView/ChangeName.vue";
export default {
  components: {
    HomeComponent: HomeComponent,
  },
};
</script>

<style scoped>
.home {
  margin-top: 5rem;
  text-align: center;
}
button {
  margin: 1rem;
}
</style>
