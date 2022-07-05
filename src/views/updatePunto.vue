<template>
<div class="update">
    <div class=" fixed-top pt-5">
        <h3 class="text-light">Actualizar</h3>
        <button v-on:click="volver" class="btn btn-success">Volver</button>
        <div>
            <br><br><br>
            <div class=" p-5 container" style="background-color:rgba(0, 10, 30, 0.1)" >
            <form action="" method="post" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control" v-model="punto.NameLocal" type="text" name="NameLocal" id="" placeholder="Local">
                    </div>
                    <div class="col-md-6">
                        <input class="form-control " v-model="punto.Longitud" type="text" name="Longitud" id="" placeholder="Longitud">
                    </div>
                    <div class="col-md-6">
                        <input class="form-control mt-3" v-model="punto.Latitud" type="text" name="Latitud" id="" placeholder="Latitud">
                    </div>
                    <div class="col-md-6 pt-3">
                        <select class="form-control" v-model="punto.Type" name="" id="">
                            <option value="1">Punto de carga</option>
                            <option value="2">Reciblaje</option>
                            <option value="3">Paneles solares</option>
                        </select>
                    </div>
                    <div class="col-md-6 pt-3">
                        <input type="text"  class="form-control"  v-model="punto.Description" placeholder="Description" name="Description">
                    </div>
                    <div class="col-md-6 pt-3">
                        <input class="form-control" type="file" name="" id="">
                    </div>
                </div>
                <a class="btn btn-success mt-3" @click="fetch()">Guardar</a>
            </form>
        </div>
        </div>
        
    </div>
</div>
    
</template>
<script>
import axios from 'axios'
export default {
  name: 'update',
  data(){
    return{
      idPunto:null,
      punto:{
        NameLocal :'',
        Description:'',
        Longitud:'',
        Latitud:'',
        Type:1,
      }
    }
  },
  mounted:function(){
      this.idPunto = this.$route.params.id
         axios.get("https://warm-mountain-66927.herokuapp.com/api/puntos/"+ this.idPunto)
         .then(datos=>{
          this.punto.NameLocal = datos.data.NameLocal;
          this.punto.Description = datos.data.Description;
          this.punto.Longitud = datos.data.Longitud;
           this.punto.Latitud = datos.data.Latitud;
          this.punto.Type = datos.data.Type; 
         })
  },
  methods: {
    fetch(){
       axios
      .put('https://warm-mountain-66927.herokuapp.com/api/puntos/'+this.idPunto, this.punto)
      .then(()=>{
       this.$router.push("/puntos/");
      })
      .catch(err => {
          console.log(err)
      });
    },
    volver(){
        this.$router.push('/')
    }
  },
}
</script>