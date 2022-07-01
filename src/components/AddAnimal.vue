<template>
  <div id="ajout">
    <h1>Poster une annonce</h1>
    <form @submit.prevent="handleSubmit">
      <label> Nom de l'animal :</label>
      <input
        type="text"
        name="Name"
        id="Name"
        placeholder="Nom de l'animal"
        v-model="animal.Name"
        required
      />
      <label> Age de l'animal :</label>

      <input
        type="number"
        name="age"
        id="age"
        placeholder="âge de l'animal"
        v-model="animal.Age"
        required
      />
      <label> Description de l'animal :</label>

      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description sur l'animal"
        v-model="animal.Description"
        required
      />

      <input type="submit" value="Enregistrer votre animal" id="add-button" />
    </form>
    <span v-if="succes !== ''" id="succes">{{ succes }} </span>
    <span id="errors">{{ errors }} </span>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/main";
export default {
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  data() {
    return {
      animal: {
        Description: "",
        Name: "",
        Age: 0,
        animal_type: "",
      },
      succes: "",
      error: "",
    };
  },

  methods: {
    handleSubmit: async function () {
      if (this.animal.Name === "") {
        this.errors.push("Il faut un nom pour votre animal!");
        return;
      }
      if (this.animal.Age === "") {
        this.errors.push("Il faut un age pour votre animal!");
        return;
      }
      if (this.animal.Description === "") {
        this.errors.push(
          "Il faut ajouter une courte description pour votre animal!"
        );
        return;
      }

      let response = await fetch("http://127.0.0.1:8000/api/animals", {
        method: "POST",
        body: JSON.stringify(this.animal),
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

      this.succes = "Animal enregistré avec succès";
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
  width: 100%;
  margin: auto;
  padding: 2%;
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
  margin-top: 2%;
  color: white;
  padding: 10px;
  cursor: pointer;
  background-color: #be3858;
  font-weight: bolder;
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
#succes {
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  padding: 3%;
  background-color: green;
}
</style>
