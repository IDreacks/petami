<template>
  <div class="new_annonce">
    <router-link to="/AddAnnonce">Ajouter une annonce</router-link>
  </div>

  <div id="ajout">
    <h1>Poster une annonce</h1>
    <form @submit.prevent="handleSubmit">
      <!-- <select
        name="AnimalType"
        id="AnimalType"
        v-if="AnimalTypes"
        v-model="AnimalType"
        required
      >
        <option
          v-for="AnimalType in AnimalTypes"
          :key="AnimalType['@id']"
          :value="AnimalType['@id']"
        >
          {{ AnimalType.name }}
        </option>
      </select> -->
      <input
        type="datetime-local"
        name="StartDate"
        id="StartDate"
        placeholder="Date du début"
        v-model="annonce.StartDate"
        required
      />

      <input
        type="datetime-local"
        name="EndDate"
        id="EndDate"
        placeholder="Date de fin"
        v-model="annonce.EndDate"
        required
      />

      <input
        type="text"
        name="Description"
        id="Description"
        placeholder="Description de vous"
        v-model="annonce.Description"
        required
      />

      <input type="submit" value="Poster l'annonce" id="add-button" />
    </form>
    <span v-if="succes !== ''" id="succes">{{ succes }} </span>
    <span id="errors">{{ errors }} </span>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "@/stores/main";
export default {
  computed: {
    ...mapWritableState(useUserStore, ["user"]),
  },
  data() {
    return {
      annonce: {
        StartDate: "",
        EndDate: "",
        Description: "",
      },
      succes: "",
      error: "",
    };
  },
  mounted() {
    // this.fetchAnimalType();
  },
  methods: {
    handleSubmit: async function () {
      console.log(this.annonce);
      if (this.annonce.EndDate === "") {
        this.errors.push("Il faut ajouter une date départ!");
        return;
      }
      if (this.annonce.StartDate === "") {
        this.errors.push("Il faut ajouter une date de fin !");
        return;
      }
      if (this.annonce.Description === "") {
        this.errors.push("Il faut ajouter description !");
        return;
      }

      this.annonce.user = `/api/users/${this.user.id}`;

      let response = await fetch("http://127.0.0.1:8000/api/annonces", {
        method: "POST",
        body: JSON.stringify(this.annonce),
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${this.user.token}`,
        },
      })
        .then((r) => {
          return r.json();
        })
        .catch((e) => {
          this.succes = e.toString();
          console.log(e);
        });

      this.succes = "Annonce ajoutée avec succès";
    },
    // fetchAnimalType: async function () {
    //   let reponse = await fetch(`http://127.0.0.1:8000/api/animals`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/ld+json",
    //     },
    //   })
    //     .then((r) => {
    //       return r.json();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    //   console.log(reponse);
    //   if (reponse["hydra:member"]) this.Animaltype = reponse["hydra:member"];
    // },
  },
};
</script>

<style scoped>
h1 {
  color: white;
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
h2 {
  width: 60%;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
  color: white;
  background-color: #181818;
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
label {
  margin: auto;
  color: hsla(160, 100%, 37%, 1);
}

#add-button {
  margin-top: 2%;
  color: hsla(160, 100%, 37%, 1);
  padding: 10px;
  cursor: pointer;
  background-color: #000000;
  font-weight: bold;
}
#add-button:hover {
  background-color: #181818;
}
#ajout {
  background-color: #181818;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  margin-top: 5%;
}
#succes {
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  padding: 3%;
  background-color: green;
}
.new_annonce {
  color: yellowgreen;
}
</style>
