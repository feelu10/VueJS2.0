import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Dashboard from "@/views/DashboardPage.vue";
import LogoutMethod from "@/components/LogoutMethod.vue";
import Signup from "@/views/RegisterForm.vue";
import NotFound from "@/views/NotFound.vue";
import DashboardSingle from "@/views/DashboardSingle.vue";
import bulkPost from "@/views/BulkPost.vue";
import { isAuthenticated } from "@/auth";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/single-post",
    name: "DashboardSingle",
    component: DashboardSingle,
    meta: { requiresAuth: true },
  },
  {
    path: "/bulk-post",
    name: "bulkPost",
    component: bulkPost,
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    name: "Logout",
    component: LogoutMethod,
    meta: { requiresAuth: true },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requiresAuth: false },
  },
  // Add the wildcard route for 404 errors
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: "HomeView" }); // Redirect to HomeView if not authenticated
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth === false)) {
    if (isAuthenticated()) {
      next({ name: "Dashboard" }); // Redirect to Dashboard if authenticated
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
