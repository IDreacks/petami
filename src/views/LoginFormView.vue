<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import LoginForm from "../components/LoginForm.vue";

const router = useRouter();
export default {
  components: {
    LoginForm,
  },
};
</script>
