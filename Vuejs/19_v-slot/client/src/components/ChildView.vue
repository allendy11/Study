<template>
  <div>
    <h1>This is {{ name }}</h1>
    <slot></slot>
    <br />
    <div>header</div>
    <slot name="header"></slot>
    <br />
    <div>body</div>
    <slot name="body"></slot>
    <br />
    <div>footer</div>
    <slot name="footer" :username="name"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "kimcoding",
    };
  },
};
</script>

<style></style>
