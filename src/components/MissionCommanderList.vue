<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commander</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(explorer, index) in explorers"
          :key="index"
          @click="setActiveExplorer(explorer, index)"
        >
          {{ explorer.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>Explorer</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Username:</strong></label> {{ currentExplorer.username}}
          <br><label><strong>Mission:</strong></label> {{ currentExplorer.mission}}
        </div>
        <router-link :to="'/explorer/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionCommanderService from "../services/MissionCommanderService";

export default {
  name: "explorer-list",
  data() {
    return {
      tutorials: [],
      explorers: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllExplorers(){
      MissionCommanderService.getAll()
        .then(response => {
          this.explorers = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(explorer, index) {
      this.currentExplorer= explorer;
      this.currentIndex = explorer? index : -1;
    }
  },
  mounted() {
    this.getAllExplorers();
  }
};
</script>
