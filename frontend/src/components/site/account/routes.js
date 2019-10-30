import React from "react";

const Page404 = React.lazy(() => import("../../../views/admin/Pages/Page404"));
const Favorite = React.lazy(() => import("./favorite"));
const Demand = React.lazy(() => import("./demand"));
const Perfil = React.lazy(() => import("./perfil"));
const Security = React.lazy(() => import("./security"));

const routes = [
  {
    path: "/account/favorite",
    exact: true,
    name: "inicio",
    component: Favorite
  },
  { path: "/account/demand", exact: true, name: "inicio", component: Demand },
  { path: "/account/info", exact: true, name: "inicio", component: Perfil },
  {
    path: "/account/security",
    exact: true,
    name: "inicio",
    component: Security
  },
  { path: "/account/*", exact: true, name: "inicio", component: Page404 }
];

export default routes;
