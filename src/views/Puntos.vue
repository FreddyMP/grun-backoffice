<template>
  <div class="puntos">
    
    <div class=" fixed-top pt-5">
      <h3>Lista de puntos</h3>
       <button v-on:click="fetch" class="btn btn-danger">Mostrar</button>
       <router-link to="/new" class="btn btn-danger ms-3">Nuevo</router-link>
       <div class="pt-5 container"> <br><br>
          <table class="table pt-5">
           <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name Local</th>
                <th scope="col">Description</th>
                <th scope="col">Longitud</th>
                <th scope="col">Latitud</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Puntos of puntos" v-bind:key="Puntos.id"  class="table-active">
                <td>{{Puntos.id}}</td>
                <td>{{Puntos.NameLocal}}</td>
                <td>{{Puntos.Description}}</td>
                <td>{{Puntos.Longitud}}</td>
                <td>{{Puntos.Latitud}}</td>
                <td><router-link class="btn btn-danger" to="/update">X</router-link></td>
              </tr>
            </tbody>
          </table>
       </div>
    </div>
      
<!--https://getwaves.io/-->

   
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'puntos',
  data() {
    return {
      puntos:[]
    }
  },
  methods: {
    fetch(){
       axios
      .get('https://warm-mountain-66927.herokuapp.com/api/puntos')
      .then(res=>{
       this.puntos =res.data
      })
      .catch(err => {
          console.log(err)
      });
    }
  },
}
</script>
