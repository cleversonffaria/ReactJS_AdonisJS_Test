export default {
  items: [
    {
      name: "Inicio",
      url: "/admin",
      icon: "icon-speedometer"
    },
    {
      name: "Empresa",
      url: "/admin/company",
      icon: "icons-store_mall_directorystore"
    },
    {
      name: "Clientes",
      url: "/admin/user",
      icon: "icons-users1"
    },
    {
      name: "Categoria",
      icon: "icons-price-tag",
      url: "/admin/category",
      children: [
        {
          name: "Ver Todas",
          url: "/admin/category/view",
          icon: "icons-bookmarkcopy3"
        },
        {
          name: "Criar",
          url: "/admin/category/add",
          icon: "icons-bookmark-outline-add"
        }
      ]
    },
    {
      name: "Sub-Categoria",
      icon: "icons-price-tags",
      url: "/admin/subcategory",
      children: [
        {
          name: "Ver Todas",
          url: "/admin/subcategory/view",
          icon: "icons-bookmarkcopy3"
        },
        {
          name: "Criar",
          url: "/admin/subcategory/add",
          icon: "icons-bookmark-outline-add"
        }
      ]
    },
    {
      name: "Produtos",
      icon: "icons-stack",
      url: "/admin/product",
      children: [
        {
          name: "Ver Todos",
          url: "/admin/product/view",
          icon: "icons-folder-open"
        },
        {
          name: "Cadastrar",
          url: "/admin/product/add",
          icon: "icons-folder-plus"
        }
      ]
    },
    {
      name: "Vendas",
      url: "/admin/demand",
      icon: "icons-cart",
      children: [
        {
          name: "Pendentes",
          url: "/admin/demand/pending",
          icon: "icons-info-with-circle"
        },
        {
          name: "Relatório",
          url: "/admin/demand/report",
          icon: "icon-pie-chart"
        }
      ]
    },

    {
      name: "Sistema",
      url: "/admin/system",
      icon: "fa fa-cog",
      children: [
        {
          name: "Sipag",
          url: "/admin/system/sipag",
          icon: "icon-puzzle",
          badge: {
            variant: "warning",
            text: "API"
          }
        },
        {
          name: "Sicoob Boleto",
          url: "/admin/system/sicoob",
          icon: "icon-puzzle",
          badge: {
            variant: "warning",
            text: "API"
          }
        },
        {
          name: "TNT Express",
          url: "/admin/system/tntexpress",
          icon: "icon-puzzle",
          badge: {
            variant: "warning",
            text: "API"
          }
        },
        {
          name: "Braspress",
          url: "/admin/system/braspress",
          icon: "icon-puzzle",
          badge: {
            variant: "warning",
            text: "API"
          }
        }
      ]
    }
  ]
};
