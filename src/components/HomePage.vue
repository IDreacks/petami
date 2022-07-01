<template>
  <div id="ajout">
    <h1>Bienvenue sur PETAMI</h1>
    <div class="boutons">
      <nav class="nav_b">
        <ul>
          <li>
            <router-link to="/login"> Se connecter </router-link>
          </li>
          <li>
            <router-link to="/Inscription"> S'inscrire </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script></script>

<style scoped>
h1 {
  color: white;
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
}

label {
  margin: auto;
  color: hsla(160, 100%, 37%, 1);
}

#add-button:hover {
  background-color: #181818;
}
#ajout {
  background-color: #be3858;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  margin-top: 5%;
}
.boutons {
  display: flex;
}
li {
  border-radius: 5px;
}
</style>
