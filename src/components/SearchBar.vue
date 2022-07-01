<template>
  <div v-if="showSearchForm == false" @click="showSearchForm = true">
    <button>Modifier la Recherche</button>
  </div>
  <form @submit.prevent="handleSubmit" v-if="showSearchForm == true">
    <label for="pets"> Choisir le type d'animal</label>
    <select name="pets" id="pets">
      <option value="1">Chien</option>
      <option value="2">Chat</option>
    </select>

    <label for="start_date"> Choisir la date de départ : </label>
    <input
      type="date"
      name="start_date"
      id="start_date"
      v-model="annonce.StartDate"
    />
    <input type="submit" name="submit" value="rechercher" />
  </form>
  <div class="all_annonces">
    <div
      class="annonce"
      v-if="annonces"
      v-for="annoncefounded in annonces"
      :key="annoncefounded.id"
    >
      <p>{{ annoncefounded.StartDate }}</p>
      <p>{{ annoncefounded.EndDate }}</p>
      <p>{{ annoncefounded.Description }}</p>
      <p>{{ annoncefounded.user.firstname }}</p>
      <p>{{ annoncefounded.user.lastname }}</p>
      <p>{{ annoncefounded.user.age }}</p>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "@/stores/main";

export default {
  data() {
    return {
      annonce: {
        StartDate: undefined,
        EndDate: 0,
        Description: "",
      },
      showSearchForm: true,
    };
  },
  methods: {
    async handleSubmit() {
      let _date = String(this.annonce.StartDate);
      let founded_annonces = await fetch(
        `http://127.0.0.1:8000/api/annonces?StartDate[after]=${_date}`
      )
        .then((response) => response.json())
        .catch((e) => e);
      console.log(founded_annonces["hydra:member"]);

      if (founded_annonces["hydra:member"]) {
        this.annonces = founded_annonces["hydra:member"];
      }
      if (founded_annonces["hydra:member"].length > 0) {
        this.showSearchForm = false;
      }
    },
  },
  computed: {
    ...mapWritableState(useUserStore, ["annonces"]),
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
textarea,
select {
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
  margin-top: 35%;
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
.new_annonce {
  display: flex;
  margin-right: 0%;
  display: flex;
}
.addA {
  display: flex;
  justify-content: flex-end;
}
.annonce {
  background-color: #be3858;
  padding: 30px;
  border-radius: 10px;
  color: white;
}
.all_annonces {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin-top: 1%;
}
</style>
