import React from "react";

const Dashboard = React.lazy(() => import("./views/admin/Home/home"));
const Company = React.lazy(() => import("./views/admin/Company/company"));

const Category = React.lazy(() => import("./views/admin/Category/category"));

const Subcategory = React.lazy(() =>
  import("./views/admin/Category/subcategory")
);
const Product = React.lazy(() => import("./views/admin/Product/product"));

const RegisterProduct = React.lazy(() =>
  import("./views/admin/Product/register")
);

const Users = React.lazy(() => import("./views/admin/Users/Users"));
const User = React.lazy(() => import("./views/admin/Users/User"));

const Demand = React.lazy(() => import("./views/admin/Pedidos/demand"));
const PedingDemand = React.lazy(() => import("./views/admin/Pedidos/peding"));
const ReportDemand = React.lazy(() => import("./views/admin/Pedidos/report"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/admin", exact: true, name: "Início", component: Dashboard },
  { path: "/admin/company", name: "Empresa", component: Company },
  { path: "/admin/product/view", name: "Produtos", component: Product },
  {
    path: "/admin/product/add",
    name: "Cadastrar Produto",
    component: RegisterProduct
  },
  {
    path: "/admin/category",
    name: "Categoria",
    component: Category
  },

  {
    path: "/admin/subcategory",
    name: "Subcategoria",
    component: Subcategory
  },

  { path: "/admin/user", exact: true, name: "Clientes", component: Users },
  {
    path: "/admin/user/:id",
    exact: true,
    name: "Informações do cliente",
    component: User
  },
  {
    path: "/admin/demand/all",
    name: "Pedidos",
    component: Demand
  },
  {
    path: "/admin/demand/pending",
    name: "Pedidos",
    component: PedingDemand
  },
  {
    path: "/admin/demand/report",
    name: "Relatório de Pedidos",
    component: ReportDemand
  }
];

export default routes;
