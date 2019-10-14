export default {
  items: [
    {
      name: 'Painel Netseg',
      url: '/',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Administrador',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Produtos',
      url: '#',
      icon: 'icon-basket-loaded',
      children: [
        {
          name: 'Favoritos',
          url: '#',
          icon: 'icon-star',
        },
        {
          name: 'Mais vendidos',
          url: '#',
          icon: 'icon-chart',
        },
      ],
    },
    {
      name: 'Pedidos',
      url: '#',
      icon: 'icon-layers',
    },
    {
      name: 'Categoria',
      url: '#',
      icon: 'icon-grid'
      // children: [
      //   {
      //     name: 'Sub-Categoria',
      //     url: '/base/breadcrumbs',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Cards',
      //     url: '/base/cards',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Carousels',
      //     url: '/base/carousels',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Collapses',
      //     url: '/base/collapses',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Dropdowns',
      //     url: '/base/dropdowns',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Forms',
      //     url: '/base/forms',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Jumbotrons',
      //     url: '/base/jumbotrons',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'List groups',
      //     url: '/base/list-groups',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Navs',
      //     url: '/base/navs',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Paginations',
      //     url: '/base/paginations',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Popovers',
      //     url: '/base/popovers',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Progress Bar',
      //     url: '/base/progress-bar',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Switches',
      //     url: '/base/switches',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Tables',
      //     url: '/base/tables',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Tabs',
      //     url: '/base/tabs',
      //     icon: 'icon-puzzle',
      //   },
      //   {
      //     name: 'Tooltips',
      //     url: '/base/tooltips',
      //     icon: 'icon-puzzle',
      //   },
      // ],
    },
    {
      name: 'Sub-Categoria',
      url: '#',
      icon: 'icon-magnifier-add'
    },    
    {
      divider: true,
    },
    {
      title: true,
      name: 'Cliente',
    },
    // {
    //   name: 'Usuário',
    //   url: '/users',
    //   icon: 'icon-user',
    // //   children: [
    // //     {
    // //       name: 'Informação 01',
    // //       url: '/#',
    // //       icon: 'icon-user'
    // //     },
    // //     {
    // //       name: 'Informação 02',
    // //       url: '/#',
    // //       icon: 'icon-user'
    // //     },
    // //     {
    // //       name: 'Informação 03',
    // //       url: '/#',
    // //       icon: 'icon-user'
    // //     },
    // // ]
    // },
    {
      name: 'Perfil do usuário',
      url: '#',
      icon: 'icon-user',
        children: [
          {
            name: 'Cadastrar usuário',
            url: '#',
            icon: 'icon-note',
          },
          {
            name: 'Editar usuário',
            url: '#',
            icon: 'icon-pencil',
          },
          {
            name: 'Deletar usuário',
            url: '#',
            icon: 'icon-trash',
          }
        ]
    },
    
    
    {
      divider: true,
    },
    {
      title: true,
      name: 'Empresa',
    },
    {
      name: 'Perfil da Empresa',
      url: '#',
      icon: 'icon-briefcase'
    },



    {
      name: 'Configurações',
      url: '#',
      icon: 'icon-settings',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Sair',
      url: '/login',
      icon: 'icon-logout',
      variant: 'danger',
    },
  ],
};
