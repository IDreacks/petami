<template>
  <div>
    <SearchBar />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import SearchBar from "../components/SearchBar.vue";

const router = useRouter();
export default {
  components: {
    SearchBar,
  },
};
</script>
