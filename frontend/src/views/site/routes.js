import React from "react";

const Home = React.lazy(() => import("../../components/site/home"));
const Category = React.lazy(() => import("../../components/site/category"));
const Product = React.lazy(() => import("../../components/site/product"));
const Cart = React.lazy(() => import("../../components/site/cart"));
// const CartEnd = React.lazy(() => import("../../components/site/cart/endereco"));
// const CartLogin = React.lazy(() => import("../../components/site/cart/login"));
const Account = React.lazy(() => import("../../components/site/account"));
const Page404 = React.lazy(() => import("../../views/admin/Pages/Page404"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "homee", component: Home },
  { path: "/product/:id", name: "product", component: Product },
  { path: "/cart/:id", exact: true, name: "cart", component: Cart },
  // { path: "/cart/endereco/:id", exact: true, name: "cart", component: CartEnd },
  // { path: "/cart/login/:id", exact: true, name: "cart", component: CartLogin },
  { path: "/category/:name", name: "category", component: Category },
  { path: "/account/:info", name: "account", component: Account },
  { path: "/*", name: "page404", component: Page404 }
];

export default routes;
