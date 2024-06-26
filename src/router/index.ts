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
          name: "branches",
          path: "/branches",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "branch",
          },
        },
        {
          name: "view-branch",
          path: "/items/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "branch",
          },
        },
        {
          name: "add-branch",
          path: "/items/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "branch",
          },
        },
        {
          name: "edit-branch",
          path: "/items/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "branch",
          },
        },
        {
          name: "items",
          path: "/items",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "item",
          },
        },
        {
          name: "view-item",
          path: "/items/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "item",
          },
        },
        {
          name: "add-item",
          path: "/items/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "item",
          },
        },
        {
          name: "edit-item",
          path: "/items/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "item",
          },
        },
        {
          name: "categories",
          path: "/categories",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "category"
          },
        },
        {
          name: "view-category",
          path: "/categories/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "category",
          },
        },
        {
          name: "add-category",
          path: "/categories/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "category",
          },
        },
        {
          name: "edit-category",
          path: "/categories/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "category",
          },
        },
        {
          name: "conditions",
          path: "/conditions",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "condition"
          },
        },
        {
          name: "view-condition",
          path: "/conditions/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "condition",
          },
        },
        {
          name: "add-condition",
          path: "/conditions/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "condition",
          },
        },
        {
          name: "edit-condition",
          path: "/conditions/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "condition",
          },
        },
        {
          name: "models",
          path: "/models",
          component: () => import("@/views/apps/document/document-list-view.vue"),
          meta: {
            docName: "model"
          },
        },
        {
          name: "view-model",
          path: "/models/:id",
          component: () => import("@/views/apps/document/document-view.vue"),
          meta: {
            docName: "model",
          },
        },
        {
          name: "add-model",
          path: "/models/addnew",
          component: () => import("@/views/apps/document/add-document-view.vue"),
          meta: {
            docName: "model",
          },
        },
        {
          name: "edit-model",
          path: "/models/edit/:id",
          component: () => import("@/views/apps/document/edit-document-view.vue"),
          meta: {
            docName: "model",
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
