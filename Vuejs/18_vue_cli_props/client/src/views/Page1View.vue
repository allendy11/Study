<template>
  <div class="page1">
    <div>this is page1</div>
    <PageComponent name="Jane" />
  </div>
</template>

<script>
import PageComponent from "@/components/Page/ChangeName.vue";
export default {
  components: {
    PageComponent: PageComponent,
  },
};
</script>

<style scoped>
.page1 {
  text-align: center;
  margin-top: 1rem;
}
</style>
