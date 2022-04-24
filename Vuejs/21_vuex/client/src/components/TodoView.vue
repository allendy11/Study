<template>
  <div>
    <input type="checkbox" />
    <span>{{ todo.title }}</span>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
