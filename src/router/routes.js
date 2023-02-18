const routes = [
  {
    path: "/",
    component: () => import("layouts/DefaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/users", component: () => import("pages/UsersPage.vue") },
      { path: "/settings", component: () => import("pages/SettingsPage.vue") },
      { path: "/runner", component: () => import("pages/RunnerPage.vue") },
      { path: "/adduser", component: () => import("pages/AddUserPage.vue") },
      { path: "/programs", component: () => import("pages/ProgramsPage.vue") },
      {
        path: "/userprograms",
        component: () => import("pages/UserProgramsPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
