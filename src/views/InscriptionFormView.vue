<template>
  <div>
    <InscriptionForm />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import InscriptionForm from "../components/InscriptionForm.vue";

const router = useRouter();
export default {
  components: {
    InscriptionForm,
  },
};
</script>
