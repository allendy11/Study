<template>
  <div>
    <label for="">Name</label>
    <input type="text" :value="name2" @input="$emit('update-name2', $event)" />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  props: {
    name2: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
