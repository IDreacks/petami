<template>
  <h1 class="augustin">Bienvenue sur PETAMI</h1>
  <div id="login">
    <h2>Connexion</h2>
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>

      <input
        type="text"
        name="email"
        v-model="user.email"
        placeholder="Votre email"
        required
      />
      <label>Mot de passe :</label>
      <input
        type="password"
        name="password"
        v-model="user.password"
        placeholder="Votre mot de passe"
        required
      />
      <input value="Connexion" type="submit" id="co-button" />
    </form>
    <span id="error">{{ error }} </span>
    <div class="r_inscr">
      <p>Vous n'avez pas de compte ?</p>
      <router-link class="inscription" to="/Inscription">
        S'inscrire
      </router-link>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { mapWritableState } from "pinia";
import { useUserStore } from "@/stores/main";

export default {
  computed: {
    ...mapWritableState(useUserStore, { userStored: "user" }),
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    handleSubmit: async function () {
      if (this.user.email != "" && this.user.password != "") {
        let response = await fetch("http://127.0.0.1:8000/api/login_check", {
          method: "POST",
          body: JSON.stringify(this.user),
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((r) => {
            return r.json();
          })
          .catch((e) => {
            this.error = e.toString();
            console.log(e);
          });

        if (response?.token) {
          let decoded = jwt_decode(response?.token);
          console.log(decoded, "RRRRRR");
          this.userStored = await decoded;
          console.log(this.userStored, "RRRRRR");
          this.userStored["token"] = response?.token;
          this.$router.push("/home");
        }
      }

      // pour rediriger plus tard sur une page   router.push("home");
      else {
        this.error = "Merci de remplir tous les champs";
      }
    },
  },
};
</script>
<style scoped>
body {
  color: #eee0e0;
}
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
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
h2 {
  width: 100%;
  margin: auto;
  padding: 10px;
  border-color: black;
  color: #be3858;
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
label {
  color: #000000;
  font-weight: bold;
}

#co-button {
  margin-top: 2%;
  width: 100%;
  color: white;
  padding: 10px;
  cursor: pointer;
  background-color: #be3858;
  font-weight: bold;
}
#co-button:hover {
  background-color: white;
  color: #be3858;
}
#login {
  background-color: #fffafa;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  border-color: black;
}
.r_inscr {
  display: flex;
}
.inscription {
  margin-left: 1%;
  color: #be3858;
}
.inscription:hover {
  color: black;
}
</style>
