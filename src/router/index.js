import { createRouter, createWebHistory } from "vue-router";

/**
 * Array of routes included in the application
 * - Default route ("/"): Home page with posts
 * - Active route ("/contact"): contact page with a form
 * - Completed route ("/author"): author page with some information about the author
 * - Completed route ("/deatil"): detail page with the route
 * - Page not found route: error page 404 is showed when the route does not match
 */
const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "HomePage" */ "@/modules/home/pages/HomePage"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "ContactPage" */ "@/modules/contact/pages/ContactPage"
      ),
  },
  {
    path: "/author",
    name: "author",
    component: () =>
      import(
        /* webpackChunkName: "ContactPage" */ "@/modules/author/pages/AuthorPage"
      ),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(
        /* webpackChunkName: 'NoPageFoundPage'*/ "@/modules/detail/pages/PostDetailPage"
      ),
    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: 'NoPageFoundPage'*/ "@/modules/shared/pages/NoPageFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
