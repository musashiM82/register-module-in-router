import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue"
import store from '../store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import(/* webpackChunkName: "Home" */ "../views/Home.vue"))
  },
  {
    path: "/about",
    name: "About",
    component: defineAsyncComponent(() => import(/* webpackChunkName: "About" */ "../views/About.vue"))
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

  if (to.name == "Home" && !(store as any).state.home) {
    import(/* webpackChunkName: "Home" */ "../store/homeStore").then((homeStore) => {
      (store as any).registerModule("home", homeStore);
      next();
    })
  } else if (to.name == "About" && !(store as any).state.about) {
    import(/* webpackChunkName: "About" */ "../store/aboutStore").then((aboutStore) => {
      (store as any).registerModule("about", aboutStore);
      next();
    })
  } else {
    next()
  }
})

export default router;
