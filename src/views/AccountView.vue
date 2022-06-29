<template>
  <div>
    <Account/>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Account from "../components/Account.vue";

const router = useRouter();
export default {
  components: {
    Account,
  },
};
</script>
