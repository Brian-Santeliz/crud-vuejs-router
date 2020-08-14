<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h3 class="text-center mb-3">Agregar Registro</h3>
      <div class="card card-body">
        <form @submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" class="form-control" v-model="registro.nombre" required />
          </div>

          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input
              type="number"
              id="telefono"
              class="form-control"
              v-model="registro.telefono"
              required
            />
          </div>

          <div class="form-group">
            <button
              class="btn btn-success btn-block"
            >ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let url = "/registro";

export default {
  data() {
    return {
      registro: {
        nombre: "",
        telefono: ""
      }
    };
  },
  methods: {
    agregarRegistro() {

      axios
        .post(url, this.registro)
        .then(() => {
          this.$router.push("/listar");
          this.student = {
            nombre: "",
            telefono: ""
          };
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>