<template>
  <title>Inscription</title>

  <div id="ajout">
    <h1>Inscription</h1>
    <form @submit.prevent="handleSubmit">
      <label>Email :</label>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Dupont@gmail.com"
        v-model="user.email"
        required
      />
      <label>Nom :</label>

      <input
        type="text"
        name="Lastname"
        id="lastname"
        placeholder="Dupont"
        v-model="user.lastname"
        required
      />
      <label>Prénom :</label>

      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Julien"
        v-model="user.firstname"
        required
      />
      <label>Mot de passe :</label>

      <input
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        v-model="user.password"
        required
      />

      <input type="submit" value="s'inscrire" id="add-button" />
    </form>
    <span v-if="succes !== ''" id="succes">{{ succes }} </span>
    <span id="errors">{{ errors }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      succes: "",
      error: "",
    };
  },

  methods: {
    handleSubmit: async function () {
      if (this.user.email === "") {
        this.errors.push(
          "Vous devez ajouter un email pour valider l'inscription"
        );
        return;
      }
      if (this.user.lastname === "") {
        this.errors.push(
          "Vous devez ajouter un nom pour valider l'inscription"
        );
        return;
      }
      if (this.user.firstname === "") {
        this.errors.push(
          "Vous devez ajouter un prénom pour valider l'inscription"
        );
        return;
      }
      if (this.user.password === "") {
        this.errors.push(
          "Vous devez ajouter un mot de passe pour valider l'inscription"
        );
        return;
      }

      let response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          return r.json();
        })
        .catch((e) => {
          this.succes = e.toString();
          console.log(e);
        });

      this.succes = "Inscription réussi ";
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
