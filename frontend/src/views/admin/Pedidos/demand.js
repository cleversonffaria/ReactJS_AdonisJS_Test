import React, { useEffect, useState } from "react";
// Imports Externos
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import { Alert, Badge } from "reactstrap";
// Imports Internos
import api from "../../../services/api";
import { Container } from "./style";
// Fim imports
const getMuiTheme = () =>
  createMuiTheme(
    {
      overrides: {
        MUIDataTableSelectCell: {
          checkboxRoot: { "&$checked": { color: "#ff7c3e !important" } }
        }
      }
    },
    ptBR
  );
const getBadge = status => {
  return status === "Pago"
    ? "success"
    : status === "Pendente"
    ? "warning"
    : status === "Enviado"
    ? "primary"
    : "danger";
};
function deliveryStatus(pedido) {
  switch (pedido) {
    case 1:
      return <div className="font-weight-bold text-danger">Preparando</div>;
    case 2:
      return <div className="font-weight-bold text-primary">Em Trânsito</div>;
    case 3:
      return <div className="font-weight-bold text-success">Entregue</div>;
    default:
      return <div className="font-weight-bold text-black-50">Indefinido</div>;
  }
}
function titleize(text) {
  var words = text.toLowerCase().split(" ");
  for (var a = 0; a < words.length; a++) {
    var w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}
function formatDate(date) {
  var monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " de " + monthNames[monthIndex] + " de " + year;
}
export default function Demand({ ...props }) {
  const [demand, setDemand] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const categoria = async () => {
      await api
        .get("demands")
        .then(res => setDemand(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    categoria();
  }, []);

  const columns = [
    {
      name: "demand_id",
      label: "ID",
      options: {
        customBodyRender: value => (
          <strong className="text-danger">#{value}</strong>
        )
      }
    },
    {
      name: "user.username",
      label: "Nome do cliente",
      options: {
        customBodyRender: value => <strong>{titleize(value)}</strong>
      }
    },
    // { name: "product.name", label: "Produto" },
    // { name: "amount", label: "Quantidade" },
    {
      name: "price",
      label: "Valor Total",
      options: {
        customBodyRender: value =>
          value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
          })
      }
    },
    {
      name: "status_payment",
      label: "Pagamento",
      options: {
        customBodyRender: value =>
          value === true ? (
            <Badge className="p-2" color={getBadge("Pago")}>
              Pago
            </Badge>
          ) : (
            <Badge className="p-2" color={getBadge("Pendente")}>
              Pendente
            </Badge>
          )
      }
    },
    {
      name: "status_delivery",
      label: "Entrega",
      options: {
        customBodyRender: value => deliveryStatus(value)
      }
    },
    {
      name: "status_demand",
      label: "Status",
      options: {
        customBodyRender: value =>
          value === true ? (
            <Badge className="p-2" color={getBadge("Enviado")}>
              Visualizado
            </Badge>
          ) : (
            <Badge className="p-2" color={getBadge("Pendente")}>
              Não visualizado
            </Badge>
          )
      }
    },
    {
      name: "created_at",
      label: "Data",
      options: {
        customBodyRender: value =>
          formatDate(new Date(value)) +
          " às " +
          new Date(value).getHours() +
          ":" +
          new Date(value).getMinutes() +
          "H"
      }
    }
  ];
  // "imagem", "Nome", "Preço", "Categoria", "Estoque", "Marca"
  const options = {
    filterType: "dropdown",
    print: false,
    download: false,
    selectableRows: "none",
    onRowsDelete: () => alert("deletei"),
    onRowClick: res =>
      props.history.push(`/admin/demand/${res[0].props.children[1]}`),
    textLabels: {
      body: {
        noMatch: " Desculpe, nenhum registro correspondente encontrado ",
        toolTip: "Ordenar",
        columnHeaderTooltip: column => `Ordenar por ${column.label}`
      },
      pagination: {
        next: "Próxima Página",
        previous: "Página Anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de"
      },
      toolbar: {
        search: "Pesquisar",
        print: "Imprimir",
        viewColumns: "Ver Colunas",
        filterTable: "Filtrar Tabela"
      },
      filter: {
        all: "Todos",
        title: "FILTRAR",
        reset: "RESETAR"
      },
      viewColumns: {
        title: "Exibir Colunas",
        titleAria: "Exibir/Esconder Tabelas Colunas"
      },
      selectedRows: {
        text: "Linha(s) selecionada(s)",
        delete: "Deletar",
        deleteAria: "Deletar linhas selecionada(s)"
      }
    }
  };

  return (
    <Container>
      {(message && <Alert color="info">{message}</Alert>) || (
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Todas Vendas"}
            data={demand}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
    </Container>
  );
}
