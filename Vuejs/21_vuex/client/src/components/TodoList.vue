<template>
  <div><TodoView v-for="todo in todos" :key="todo.id" :todo="todo" /></div>
</template>

<script>
import TodoView from "@/components/TodoView";
export default {
  components: {
    TodoView,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
