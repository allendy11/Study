<template>
  <div>
    <h1>this is page3</h1>
    <form action="">
      <InputField :name="name" @update-name="updateName" />
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/Page/InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    updateName(name) {
      this.name = name;
    },
  },
};
</script>

<style></style>
