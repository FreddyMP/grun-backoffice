<template>
<div class="update">
     <div class=" fixed-top pt-5">
        <h3>Actualizar</h3>
        <button v-on:click="fetch" class="btn btn-danger">Volver</button>
        <div>
            <br><br><br>
            <div class=" p-5 container" style="background-color:rgba(0, 10, 30, 0.1)" >
            <form action="" method="post">
                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control" v-model="Local" type="text" name="" id="">
                    </div>
                    <div class="col-md-6">
                        <select class="form-control" name="" id="">
                            <option value="1">Punto de carga</option>
                            <option value="2">Reciblaje</option>
                            <option value="3">Paneles solares</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <Textarea  class="form-control"></Textarea>
                    </div>
                </div>
                <button class="btn btn-success">Guardar</button>
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
  data() {
    return {
      Local: 'fsdf'
    }
  },
  methods: {
    fetch(){
       axios
      .get('https://warm-mountain-66927.herokuapp.com/api/puntos/1')
      .then(res=>{
       this.Local = res.data
      })
      .catch(err => {
          console.log(err)
      });
    }
  },
}
</script>