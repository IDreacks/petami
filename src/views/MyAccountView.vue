<template>
  <div>
    <MyAccount />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import MyAccount from "../components/MyAccount.vue";

const router = useRouter();
export default {
  components: {
    MyAccount,
  },
};
</script>
