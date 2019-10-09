import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/admin/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/admin/Base/Cards'));
const Carousels = React.lazy(() => import('./views/admin/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/admin/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/admin/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/admin/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/admin/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/admin/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/admin/Base/Navbars'));
const Navs = React.lazy(() => import('./views/admin/Base/Navs'));
const Paginations = React.lazy(() => import('./views/admin/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/admin/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/admin/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/admin/Base/Switches'));
const Tables = React.lazy(() => import('./views/admin/Base/Tables'));
const Tabs = React.lazy(() => import('./views/admin/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/admin/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/admin/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/admin/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/admin/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/admin/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/admin/Charts'));
const Dashboard = React.lazy(() => import('./views/admin/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/admin/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/admin/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/admin/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/admin/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/admin/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/admin/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/admin/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/admin/Theme/Colors'));
const Typography = React.lazy(() => import('./views/admin/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/admin/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/admin/Users/Users'));
const User = React.lazy(() => import('./views/admin/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/',exact: true, name: 'Home' },
  { path: '/admin',exact: true, name: 'Admin', component: Dashboard },
  { path: '/admin/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/admin/theme/colors', name: 'Colors', component: Colors },
  { path: '/admin/theme/typography', name: 'Typography', component: Typography },
  { path: '/admin/base', exact: true, name: 'Base', component: Cards },
  { path: '/admin/base/cards', name: 'Cards', component: Cards },
  { path: '/admin/base/forms', name: 'Forms', component: Forms },
  { path: '/admin/base/switches', name: 'Switches', component: Switches },
  { path: '/admin/base/tables', name: 'Tables', component: Tables },
  { path: '/admin/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/admin/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/admin/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/admin/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/admin/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/admin/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/admin/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/admin/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/admin/base/navs', name: 'Navs', component: Navs },
  { path: '/admin/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/admin/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/admin/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/admin/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/admin/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/admin/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/admin/icons/flags', name: 'Flags', component: Flags },
  { path: '/admin/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/admin/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/admin/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/admin/notifications/badges', name: 'Badges', component: Badges },
  { path: '/admin/notifications/modals', name: 'Modals', component: Modals },
  { path: '/admin/widgets', name: 'Widgets', component: Widgets },
  { path: '/admin/charts', name: 'Charts', component: Charts },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
