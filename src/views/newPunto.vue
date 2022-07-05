<template>
<div class="new">
     <div class=" fixed-top pt-5">
        <h3 class="text-light">Nuevo</h3>
        <button v-on:click="volver" class="btn btn" style="border:solid; border-color:green; color:green; background-color:white">Volver</button>
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
                <a class="btn btn-success mt-3" v-on:click="envio" >Guardar</a>
            </form>
        </div>
        </div>
        
    </div>
</div>
    
</template>
<script  scoped>


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
         },
    })
  .then((response) => response.json())
  .then((json) => console.log(json.stringify(this.punto)));
    },
    volver(){
        this.$router.push('/')
    }
  }
}
</script>
<style >
    .arrow_box {
	position: relative;
	background: #88b7d5;
	border: 4px solid #c2e1f5;
}
.arrow_box:after, .arrow_box:before {
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: "";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box:after {
	border-color: rgba(136, 183, 213, 0);
	border-left-color: #88b7d5;
	border-width: 10px;
	margin-top: -10px;
}
.arrow_box:before {
	border-color: rgba(194, 225, 245, 0);
	border-left-color: #c2e1f5;
	border-width: 16px;
	margin-top: -16px;
}
</style>