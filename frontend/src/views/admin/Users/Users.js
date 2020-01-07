import React, { useEffect, useState } from "react";
// Imports Externos
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
// Imports Internos
import api from "../../../services/api";
import { Container } from "./styles";
import { Alert } from "reactstrap";

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
function user_Status(user) {
  switch (user) {
    case 1:
      return <div className="font-weight-bold text-primary">Administrador</div>;
    case 2:
      return <div className="font-weight-bold text-danger">Colaborador</div>;
    case 3:
      return <div className="font-weight-bold text-success">Usuário</div>;
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
export default function Clients({ ...props }) {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const users = async () => {
      await api
        .get("users")
        .then(res => {
          res.data.map(user => {
            if (!user.created_at) {
              user.created_at = "Indefinido";
            } else {
              user.created_at = formatDate(new Date(user.created_at));
            }
            return user;
          });
          setData(res.data);
        })
        .catch(error =>
          setMessage("Não existe usuário cadastrado no sistema.")
        );
    };
    users();
  }, []);

  const columns = [
    {
      name: "id",
      label: "id"
    },
    {
      name: "username",
      label: "Nome",
      options: {
        customBodyRender: value => <strong>{titleize(value)}</strong>
      }
    },
    { name: "email", label: "Email" },
    {
      name: "user_status",
      label: "Privilégio",
      options: {
        customBodyRender: value => user_Status(value)
      }
    },
    { name: "created_at", label: "Data do Cadastro" }
  ];
  // "imagem", "Nome", "Preço", "Categoria", "Estoque", "Marca"
  const options = {
    filterType: "dropdown",
    print: false,
    download: false,
    selectableRows: "none",
    onRowClick: res => props.history.push(`/admin/user/${res[0]}`),
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
  function filterUser(value) {
    return value.user_status === 3;
  }
  return (
    <Container>
      {(message && <Alert color="info">{message}</Alert>) || (
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Lista de clientes"}
            data={data && data.filter(filterUser)}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
    </Container>
  );
}
