<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header class="main-header">
    <nav class="navbar">
      <div class="navbar__logo">
        <router-link to="/">PETAMI</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/">
            Blog <span class="material-icons"> text_snippet </span>
          </router-link>
        </li>
        <li>
          <router-link to="/Search">
            Recherche <span class="material-icons"> search </span>
          </router-link>
        </li>
        <li>
          <router-link to="/MyAnimals">
            Mes animaux<span class="material-icons"> pets </span>
          </router-link>
        </li>
        <li>
          <router-link to="/Account">
            Mon compte <span class="material-icons"> account_circle </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style>
img {
  width: 150px;
  height: 100px;
  vertical-align: middle;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  padding: 0;
  margin: 0;
  min-height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}
/* HEADER */

.main-header {
  background-color: #be3858;
  color: rgb(255, 255, 255);
}

a {
  color: black;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

a:hover {
  color: #e5e5e5;
}

nav {
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  background-color: white;

  margin-right: 10%;
  padding: 1%;
  width: 12vw;
}

li a {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
span {
  margin-left: 5%;
}
.navbar__logo a {
  color: white;
  font-size: 2rem;
}
</style>
