import React from "react";

const Dashboard = React.lazy(() => import("./views/admin/Home/home"));
const Product = React.lazy(() => import("./views/admin/Product/product"));
const ProductAdd = React.lazy(() => import("./views/admin/Product/product"));

const Users = React.lazy(() => import("./views/admin/Users/Users"));
const User = React.lazy(() => import("./views/admin/Users/User"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/admin", exact: true, name: "Início", component: Dashboard },
  { path: "/admin/product/view", name: "Produtos", component: Product },
  {
    path: "/admin/product/add",
    name: "Cadastrar Produto",
    component: ProductAdd
  },
  { path: "/admin/user", exact: true, name: "Clientes", component: Users },
  {
    path: "/admin/user/:id",
    exact: true,
    name: "Informações do cliente",
    component: User
  }
];

export default routes;
