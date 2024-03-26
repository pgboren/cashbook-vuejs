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
          name: "vehicles",
          path: "/vehicles",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "vehicle",
          },
        },
        {
          name: "colors",
          path: "/colors",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "color"
          },
        },
        {
          name: "view-color",
          path: "/colors/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "color",
          },
        },
        {
          name: "edit-color",
          path: "/colors/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "color",
          },
        },
        {
          name: "add-color",
          path: "/colors/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "color",
          },
        },
        {
          name: "users",
          path: "/users",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "user"
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
          meta: {
            docName: "user",
          },
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

// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore(); // Assuming useUserStore is a Vue Composition API function
//   // We have to add check the access token if it is expired
//   if (to.meta.requiresAuth && !userStore.isLoggedIn) {
//     next('/login'); // Redirect to login page if not logged in
//   } else {
//     next(); // Continue navigation
//   }
// });


export default router;
