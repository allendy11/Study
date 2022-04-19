<template>
  <div class="page2">
    <div>this is page2</div>
    <ShowTitle />
    <ShowTitle title="page2" />
  </div>
</template>

<script>
import ShowTitle from "@/components/Page/ShowTitle.vue";
export default {
  components: {
    ShowTitle,
  },
};
</script>

<style scoped>
.page2 {
  text-align: center;
  margin-top: 1rem;
}
</style>
