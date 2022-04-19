<template>
  <div>
    <span>{{ name }}</span>
    <br />
    <button @click="changeName">change</button>
    <button @click="returnName">return</button>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "Kimcoding" };
  },
  methods: {
    changeName() {
      this.name = "Kimcoding is updated";
    },
    returnName() {
      this.name = "Kimcoding";
    },
  },
};
</script>

<style></style>
