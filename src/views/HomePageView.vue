<template>
  <div>
    <HomePage />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";

const router = useRouter();
export default {
  components: {
    HomePage,
  },
};
</script>
