<template>
  <div>
    <input type="checkbox" :checked="todo.checked" @change="toggleTodo" />
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
  methods: {
    toggleTodo(e) {
      this.$emit("toggle-todo", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
  },
};
</script>

<style></style>
