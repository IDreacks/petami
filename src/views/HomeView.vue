<template>
  <div>
    <Home/>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Home from "../components/Home.vue";

const router = useRouter();
export default {
  components: {
    Home,
  },
};
</script>
