<template>
  <div class="row">
    <div class="col-md-12">
      <template v-if="Registros.length > 0">
        <table class="table table-striped">
          <thead class="thead-info">
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in Registros" :key="registro.id">
              <td>{{ registro.nombre }}</td>
              <td>{{ registro.telefono }}</td>
              <td>
                <router-link
                  :to="{name: 'editar', params: { id: registro.id }}"
                  class="btn btn-info"
                ><i class="fas fa-edit"></i></router-link>
                <button
                  @click.prevent="eliminarRegistro(registro.id)"
                  class="btn btn-danger"
                ><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else>
        <h3
          class="text-center p-2 mt-3 border-bottom border border-secondary"
        >No hay registros en la BD</h3>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let url = "/registro";

export default {
  data() {
    return {
      Registros: []
    };
  },
  created() {
    axios
      .get(url)
      .then(res => {
        this.Registros = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    eliminarRegistro(id) {
      let indiceEliminar = this.Registros.findIndex(i => i.id === id);

      if (
        window.confirm(`¿Estas seguro en eliminar el registro con id: ${id}?`)
      ) {
        axios
          .delete(`${url}/${id}`)
          .then(() => {
            this.Registros.splice(indiceEliminar, 1);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
