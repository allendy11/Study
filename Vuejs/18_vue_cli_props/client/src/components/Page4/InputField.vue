<template>
  <div>
    <label for="">Name</label>
    <input type="text" :value="name" @input="updateName" />
    <button>Submit</button>
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
      this.$emit("update-name", e.target.value);
    },
  },
};
</script>

<style></style>
