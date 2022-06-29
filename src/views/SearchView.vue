<template>
  <div>
    <Search />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Search from "../components/Search.vue";

const router = useRouter();
export default {
  components: {
    Search,
  },
};
</script>
