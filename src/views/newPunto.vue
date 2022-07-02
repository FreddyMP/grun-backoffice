<template>
<div class="new">
     <div class=" fixed-top pt-5">
        <h3>Nuevo</h3>
        <button v-on:click="fetch" class="btn btn-danger">Volver</button>
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
                <a class="btn btn-success mt-3" @click="envio">Guardar</a>
            </form>
        </div>
        </div>
        
    </div>
</div>
    
</template>
<script>


export default {
  name: 'new',
  data:()=>({
    punto:{
        NameLocal: '',
        Description: '',
        Type: 1,
        Latitud:'',
        Longitud:'',
        User:'testing'
    },
    ejemplo:{
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
  }),
  methods:{
    envio(){
      fetch("http://warm-mountain-66927.herokuapp.com/public/api/puntos", {
        method: 'POST',
        body: JSON.stringify(this.punto),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "   Access-Control-Allow-Origin":"http://192.168.1.4:8080/*",
           
         },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
    },
  }
}
</script>