<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h3 class="text-center">Actualizar Registro</h3>
      <div class="card card-body">
        <form @submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label>Nombre:</label>
            <input type="text" class="form-control" v-model="registro.nombre" required />
          </div>

          <div class="form-group">
            <label>Teléfono:</label>
            <input type="number" class="form-control" v-model="registro.telefono" required />
          </div>

          <div class="form-group">
            <button class="btn btn-info btn-block">ACTUALIZAR</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      registro: {}
    };
  },
  created() {
    let url = `/registro/${this.$route.params.id}`;

    axios.get(url).then(res => {
      this.registro = res.data[0];
    });
  },
  methods: {
    actualizarRegistro() {
      let url = `/registro/${this.$route.params.id}`;

      axios
        .put(url, this.registro)
        .then(res => {
          this.$router.push("/listar");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>