<template>
  <div id="ajout">
    <form @submit.prevent="handleSearch" class="search_form">
      <label> Cherchez par date</label>
      <input
        type="text"
        name="search_bar"
        id="search_bar"
        v-model.trim="search_content"
        @keyup="handleSearch"
        placeholder="Saisissez une date en respectant le format 2000-06-20 "
      />
    </form>
    <span>{{ error_msg }}</span>

    <input type="submit" value="Recherche" id="add-button" />
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main.ts";
import ServicesMixin from "../mixins/ServicesMixin.vue";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export default {
  mixins: [ServicesMixin],
  computed: {
    ...mapWritableState(useMainStore, [
      "search_content",
      "error_msg",
      "annonces",
      "response",
    ]),
  },
  methods: {
    handleSearch() {
      if (this.search_content.length < 1) {
        this.fetchAnnonces();
        return;
      }

      let object_to_send = { data: this.search_content };

      axios
        .get(`http://127.0.0.1:8000/Annonces/${this.search_content}`)
        .then((response) => {
          this.annonces = response?.data?.annonces;
        })
        .catch((e) => {
          this.response = e?.message;
          setTimeout(() => {
            this.response = "";
          }, 2000);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #be3858;
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
}
form input,
textarea {
  width: 20vw;
  margin: auto;
  padding: 1%;
  border-radius: 5px;
  outline: none;
  border-color: black;
  color: black;
  background-color: white;
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
label {
  color: black;
  font-weight: bold;
}

#add-button {
  margin: auto;
  color: white;
  padding: 10px;
  cursor: pointer;
  background-color: #be3858;
  font-weight: bolder;
  justify-content: center;
  display: flex;
}
#add-button:hover {
  background-color: #181818;
}
#ajout {
  background-color: #fffafa;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  margin-top: 5%;
  border-color: #000000;
}
label {
  margin: auto;
}
</style>
