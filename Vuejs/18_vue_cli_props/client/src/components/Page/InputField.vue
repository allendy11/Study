<template>
  <div>
    <label for="">Name</label>
    <input type="text" :value="name" @input="updateName" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      this.$emit("update-name", e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px 20px;
}
</style>
