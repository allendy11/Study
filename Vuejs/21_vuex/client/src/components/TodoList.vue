<template>
  <div>
    <TodoView
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
    />
  </div>
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
  methods: {
    toggleTodo({ id, checked }) {
      this.$emit("toggle-todo", { id, checked });
    },
  },
};
</script>

<style></style>
