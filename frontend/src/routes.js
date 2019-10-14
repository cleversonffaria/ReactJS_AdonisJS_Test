import React from 'react';

const Dashboard = React.lazy(() => import('./views/admin/Dashboard'));
const Users = React.lazy(() => import('./views/admin/Users/Users'));
const User = React.lazy(() => import('./views/admin/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Início'},
  { path: '/netseg', name: 'Painel de controle', component: Dashboard },
  { path: '/usuario', exact: true,  name: 'Usuário', component: Users },
  { path: '/usuario/:id', exact: true, name: 'Detalhes do usuário', component: User },
];

export default routes;
