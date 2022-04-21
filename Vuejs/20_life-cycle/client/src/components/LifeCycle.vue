<template>
  <div>
    <div>{{ name }}</div>
    <button @click="changeName">change</button>
    <button @click="returnName">return</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "kimcoding",
    };
  },
  methods: {
    changeName() {
      this.name = "kimcoding is updated";
    },
    returnName() {
      this.name = "kimcoding";
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.name);
  },
  created() {
    console.log("created", this.name);
  },
  beforeMount() {
    console.log("beforeMount", this.name);
  },
  mounted() {
    console.log("mounted", this.name);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.name);
  },
  updated() {
    console.log("updated", this.name);
  },
  beforeUnmount() {
    console.log("beforeUnmount", this.name);
  },
  unmounted() {
    console.log("unmounted", this.name);
  },
};
</script>

<style></style>
