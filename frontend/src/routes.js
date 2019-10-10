import React from 'react';

const Dashboard = React.lazy(() => import('./views/admin/Dashboard'));
const Colors = React.lazy(() => import('./views/admin/Theme/Colors'));


const routes = [
  { path: '/',exact: true, name: 'Home' },
  { path: '/admin',exact: true, name: 'Admin', component: Dashboard },
  { path: '/admin/categoria', exact: true, name: 'Theme', component: Colors },  
];

export default routes;
