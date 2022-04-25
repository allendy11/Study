<template>
  <div>
    <h1>To-Do App</h1>
    <CompleteTodo :todos="todos" />
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" />
  </div>
</template>

<script>
import CompleteTodo from "@/components/CompleteTodo.vue";
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  components: {
    CompleteTodo,
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Study code",
          checked: true,
        },
        {
          id: 2,
          title: "Buy a note",
          checked: false,
        },
      ],
    };
  },
  methods: {
    addTodo(title) {
      const id = this.todos[this.todos.length - 1].id + 1;
      const todo = {
        id,
        title,
        checked: false,
      };
      this.todos.push(todo);
    },
    toggleTodo({ id, checked }) {
      const index = this.todos.findIndex((el) => el.id === id);
      this.todos[index].checked = checked;
    },
  },
};
</script>

<style></style>
