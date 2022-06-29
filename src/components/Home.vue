<template>
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
        type="text"
        name="Name"
        id="Name"
        placeholder="Nom de l'animal"
        v-model="animal.Name"
        required
      />

      <input
        type="number"
        name="age"
        id="age"
        placeholder="âge de l'animal"
        v-model="animal.Age"
        required
      />

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
export default {
  data() {
    return {
      animal: {
        Description: "",
        Name: "",
        Age: 0,
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
      if (this.animal.Name === "") {
        this.errors.push("Il faut un nom pour votre animal!");
        return;
        image.png;
      }
      if (this.animal.Age === "") {
        this.errors.push("Il faut un age pour votre animal!");
        return;
      }
      if (this.animal.Description === "") {
        this.errors.push("Il faut ajouter une courte description pour votre animal!");
        return;
      }

      let response = await fetch("http://127.0.0.1:8000/api/animals", {
        method: "POST",
        body: JSON.stringify(this.animal),
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
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
</style>
