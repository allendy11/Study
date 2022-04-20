<template>
  <div>
    <ChildView>
      <template v-slot:header>
        <div>this is header</div>
      </template>
      <template #body>
        <div>this is body</div>
      </template>
      <template #footer="props">
        <div>this is footer</div>
        <div>{{ props.username }}</div>
      </template>
    </ChildView>
  </div>
</template>

<script>
import ChildView from "@/components/ChildView.vue";
export default {
  components: {
    ChildView,
  },
};
</script>

<style></style>
