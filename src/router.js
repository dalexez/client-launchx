import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/addExplorer",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missioncommander",
    name: "missioncommander",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/addMissionCommander",
    name: "add-missionCommander",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
