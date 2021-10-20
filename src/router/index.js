import { createWebHistory, createRouter } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   component: () => import("@/views/Auth/Login"),
  //   name: "login",
  // },
  // {
  //   path: "/logout",
  //   name: "logout",
  //   // meta: {
  //   //   requiresAuth: true,
  //   // },
  // },
  {
    path: "/",
    component: () => import("@/views/Layouts/Default"),
    // meta: {
    //   requiresAuth: true,
    // },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/pages/Home"),
        meta: {
        title: "infocliq",
        },
      },
      {
        path: "about",
        name: "about-us",
        component: () => import("@/views/pages/About"),
        meta: {
        title: "About Us",
        },
      },
      {
        path: "contact",
        name: "contact-us",
        component: () => import("@/views/pages/Contact"),
        meta: {
        title: "Contact Us",
        },
      },
      {
        path: "getquote",
        name: "get-quote",
        component: () => import("@/views/pages/GetQuote"),
        meta: {
        title: "Get Quote",
        },
      },
      {
        path: "services",
        name: "services",
        component: () => import("@/views/pages/Services"),
        meta: {
        title: "Services",
        },
      },
      {
        path: "blog",
        name: "blog-index",
        component: () => import("@/views/pages/blog/BlogIndex"),
        meta: {
        title: "Blog",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";

  next();
});

export default router;
