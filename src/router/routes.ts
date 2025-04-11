import EditTask from "@/pages/EditTask.vue";
import NewTask from "@/pages/NewTask.vue";
import Main from "@/pages/Main.vue";
import NotFound from "@/pages/NotFound.vue";

export default [
  {
    path: "/", component: Main, name: "home", 
  },
  {
    path: "/newtask", component: NewTask, name: "newtask", 
  },
  {
    path: "/edittask/:id", component: EditTask, name: "edittask" 
  },
  {
    path: "/:pathMatch(.*)*", component: NotFound, name: "notfound" 
  }

]