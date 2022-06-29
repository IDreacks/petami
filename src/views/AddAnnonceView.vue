<template>
  <div>
    <AddAnnonce/>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AddAnnonce from "../components/AddAnnonce.vue";

const router = useRouter();
export default {
  components: {
    AddAnnonce,
  },
};
</script>
