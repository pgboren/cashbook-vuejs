import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(),
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
          name: "Grids",
          path: "/grids",
          component: () => import("@/views/ui-components/Grids.vue"),
        },
        {
          name: "Cards",
          path: "/cards",
          component: () => import("@/views/ui-components/Cards.vue"),
        },
        {
          name: "vehicles",
          path: "/vehicles",
          component: () => import("@/views/apps/vehicle/vehicle-list-view.vue"),
          meta: {
            docName: "vehicle",
          },
        },
        
        {
          name: "users",
          path: "/users",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "user",
          },
        },
        {
          name: "view-user",
          path: "/users/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "user",
          },
        },
        {
          name: "add-user",
          path: "/users/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "user",
          },
        },
        {
          name: "edit-user",
          path: "/users/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
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

router.beforeEach((to, from, next) => {
  const useStore = useUserStore()
  //We have to add check the access token of It is expired
  if (to.meta.requiresAuth && !useStore.isLoggedIn) return '/login'
  next();
})


export default router;
