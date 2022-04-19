<template>
  <div>
    <label for="">Name</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button @click="clickHandler">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: "student",
    };
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickHandler() {
      console.log(this.modelValue);
    },
  },
};
</script>

<style></style>
