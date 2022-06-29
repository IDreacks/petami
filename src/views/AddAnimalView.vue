<template>
  <div>
    <AddAnimal/>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AddAnimal from "../components/AddAnimal.vue";

const router = useRouter();
export default {
  components: {
    AddAnimal,
  },
};
</script>
