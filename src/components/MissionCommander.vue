<template>
<h4>Mission Commander</h4>
  <div v-if="currentExplorer" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentExplorer.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentExplorer.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteExplorer">
      Eliminar Explorer
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateExplorer">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un explorer. </p>
  </div>
</template>
<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "explorer",
  data() {
    return {
      currentExplorer: null,
      message: ''
    };
  },
  methods: {
    getExplorer(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentExplorer= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteExplorer() {
      MissionCommanderService.delete(this.currentExplorer.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "explorers" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateExplorer() {
      MissionCommanderService.update(this.currentExplorer.id, this.currentExplorer)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getExplorer(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
