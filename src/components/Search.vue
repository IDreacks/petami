<template>
  <!-- <div class="new_annonce">
    <router-link class="addA" to="/AddAnnonce">Ajouter une annonce</router-link>
  </div>
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
  </div> -->
  


<div id='myapp'>

  <!-- Date picker -->
  <vuejs-datepicker wrapper-class="inline" placeholder="From date" format="dd/MM/yyyy" :clear-button="true" v-model='fromdate' @closed='checkDate();'></vuejs-datepicker>
  <vuejs-datepicker wrapper-class="inline" placeholder="To date" format="dd/MM/yyyy" :clear-button="true" v-model='todate' @closed='checkDate();' ></vuejs-datepicker>

  <!-- Search Button -->
  <input type='button' @click='fetchRecords()' value='Search'>

  <br><br>
  <!-- List records -->
  <table border='1' width='80%' style='border-collapse: collapse;'>
    <thead>
      <tr>
        <th>Employee name</th>
        <th>Date of Join</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='employee in employees'>
        <td>{{ employee.emp_name }}</td>
        <td>{{ employee.date_of_join }}</td>
        <td>{{ employee.email }}</td>
      </tr>

      <tr v-show="recordNotFound">
        <td colspan='3'>No record found.</td>
      </tr>
    </tbody>

  </table>

</div>
</template>

<script>
import axios from "axios";
// import { mapState, mapWritableState } from "pinia";
// import { useMainStore } from "../stores/main.ts";
// import ServicesMixin from "../mixins/ServicesMixin.vue";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export default {
    var app = new Vue({
   el: '#myapp',
   data: {
     fromdate: "",
     todate: "",
     Firstname: "",
     recordNotFound: true
   },
   methods: {
     checkDate: function(){

       if(this.fromdate != ''){
          var fromdate = new Date(this.fromdate);
          var todate = new Date(this.todate);

          if(fromdate.getTime() > todate.getTime()){
             var currentDate = new Date();

             var day = fromdate.getDate(); 
             var month = fromdate.getMonth(); 
             var year = fromdate.getFullYear();

             this.todate = new Date(year, month, day);
          }

       }

     },
     fetchRecords: function(){

        if(this.fromdate !='' && this.todate != ''){

          axios.get('http://127.0.0.1:8000/api/annonces', {
            params: {
              fromdate: this.fromdate,
              todate: this.todate
            }
          })
          .then(function (response) {
             app.employees = response.data;

             // Display no record found <tr> if record not found
             if(annonces.startDate.length == 0){
               app.recordNotFound = true;
             }else{
               app.recordNotFound = false;
             }
          })
          .catch(function (error) {
             console.log(error);
          });

        }

     }
   },
   components: {
      vuejsDatepicker
   } 
})
//   mixins: [ServicesMixin],
//   computed: {
//     ...mapWritableState(useMainStore, [
//       "search_content",
//       "error_msg",
//       "annonces",
//       "response",
//     ]),
//   },
//   methods: {
//     handleSearch() {
//       if (this.search_content.length < 1) {
//         this.fetchAnnonces();
//         return;
//       }

//       let object_to_send = { data: this.search_content };

//       axios
//         .get(`http://127.0.0.1:8000/Annonces/${this.search_content}`)
//         .then((response) => {
//           this.annonces = response?.data?.annonces;
//         })
//         .catch((e) => {
//           this.response = e?.message;
//           setTimeout(() => {
//             this.response = "";
//           }, 2000);
//         });
//     },
//   },
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
.new_annonce {
  display: flex;
  margin-right: 0%;
  display: flex;
}
.addA {
  display: flex;
  justify-content: flex-end;
}
</style>
