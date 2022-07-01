<template>
  <div>
    <MyAnimals />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import MyAnimals from "../components/MyAnimals.vue";

const router = useRouter();
export default {
  components: {
    MyAnimals,
  },
};
</script>
