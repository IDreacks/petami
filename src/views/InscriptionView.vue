<template>
  <div>
    <Inscription/>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Inscription from "../components/Inscription.vue";

const router = useRouter();
export default {
  components: {
    Inscription,
  },
};
</script>
