<template>
  <div>
    <input
      v-model="inputText"
      type="text"
      @keyup.enter="addTodo"
      placeholder="Type Todo"
    />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    addTodo(e) {
      console.log(e);
      this.$emit("add-todo", e.target.value);
      this.inputText = "";
    },
  },
};
</script>

<style></style>
