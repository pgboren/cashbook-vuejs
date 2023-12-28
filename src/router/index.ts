import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '@/stores/user';

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: "/dashboards",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Home",
          path: "/dashboards",
          component: () => import("@/views/dashboards/classic/Classic.vue"),
          meta: {
            requiresAuth: true,
          }
        },
        {
          name: "CaseBoard",
          path: "/case-board",
          component: () => import("@/views/apps/case-board/CaseBoard.vue"),
          meta: {
            requiresAuth: true,
          }
        },
        {
          name: "ContactList",
          path: "/contacts",
          component: () => import("@/views/apps/contact-list/ContactList.vue"),
          meta: {
            requiresAuth: true,
          }
        },
        {
          name: "Cards",
          path: "/cards",
          component: () => import("@/views/ui-components/Cards.vue"),
        },
        {
          name: "users",
          path: "/users",
          component: () => import("@/views/apps/users/user-list.vue"),
        },
        {
          name: "view-user",
          path: "/users/:userId",
          component: () => import("@/views/apps/users/user-view.vue"),
        },
        {
          name: "add-user",
          path: "/users/addnew",
          component: () => import("@/views/apps/users/add-user-view.vue"),
        },
        {
          name: "edit-user",
          path: "/users/edit/:userId",
          component: () => import("@/views/apps/users/edit-user-view.vue"),
        }
      ],
    },
    {
      path: "/authentication",
      component: () => import("@/layouts/blank/BlankLayout.vue"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/views/authentication/Login.vue"),
        }
      ],
    },
  ],
});

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const useStore = useUserStore()
  if (to.meta.requiresAuth && !useStore.isLoggedIn) return '/login'
})


export default router;
