<template>
  <div>
    <h1>This is Page4</h1>
    <h3>Practice following page3</h3>
    <form action="">
      <InputField :name="name" @update-name="updateName" />
      <span>name: </span>{{ name }}
    </form>
    <br />
    <form action="">
      <InputField2 :name2="name2" @update-name2="name2 = $event.target.value" />
      <span>name2: </span>{{ name2 }}
    </form>
    <br />
    <!-- <form action=""> -->
    <InputField3 v-model="name3" />
    <span>name3: </span>{{ name3 }}
    <!-- </form> -->
  </div>
</template>

<script>
import InputField from "@/components/Page4/InputField.vue";
import InputField2 from "@/components/Page4/InputField2.vue";
import InputField3 from "@/components/Page4/InputField3.vue";
export default {
  components: {
    InputField,
    InputField2,
    InputField3,
  },
  data() {
    return {
      name: "",
      name2: "",
      name3: "a",
    };
  },
  methods: {
    updateName(name) {
      this.name = name;
    },
    // updateName2(name) {
    //   this.name2 = name;
    // },
  },
};
</script>

<style>
form {
  margin: 1rem;
}
</style>
