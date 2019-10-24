export default {
  items: [
    {
      name: "Login",
      url: "/login",
      icon: "icons-lock2 fa-lg"
      // badge: {
      //   variant: "info",
      //   text: "NEW"
      // }
    },
    {
      name: "Registrar",
      url: "/register",
      icon: "fa fa-user-plus fa-lg"
      // badge: {
      //   variant: "info",
      //   text: "NEW"
      // }
    },
    {
      title: true,
      name: "Categorias",
      wrapper: {
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Wireless",
      url: "/admin/categoria",
      icon: "icon-drop"
    },
    {
      name: "Olt",
      url: "/admin/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "olt 1",
          url: "/admin/base/breadcrumbs",
          icon: "icon-puzzle"
        },
        {
          name: "olt 2",
          url: "/admin/base/cards",
          icon: "icon-puzzle"
        },
        {
          name: "olt 3",
          url: "/admin/base/carousels",
          icon: "icon-puzzle"
        }
      ]
    },
    {
      name: "Outra Cat",
      url: "/admin/buttons",
      icon: "icon-cursor",
      children: [
        {
          name: "cat 1",
          url: "/admin/buttons/buttons",
          icon: "icon-cursor"
        },
        {
          name: "cat 2",
          url: "/admin/buttons/button-dropdowns",
          icon: "icon-cursor"
        },
        {
          name: "cat 3",
          url: "/admin/buttons/button-groups",
          icon: "icon-cursor"
        }
      ]
    },
    {
      name: "Categoria sem Sub",
      url: "/admin/charts",
      icon: "icon-pie-chart"
    }
  ]
};
