<template>
  <div class="homeview">
    <h1>This is home page</h1>
    <CompTest1 />
    <Comp2 />
  </div>
</template>

<script>
import CompTest1 from "@/components/CompTest1.vue";
import Comp2 from "@/components/Comp2.vue";
export default {
  components: {
    CompTest1,
    Comp2,
  },
};
</script>

<style scoped>
.homeview {
  margin: 2rem;
}
</style>
