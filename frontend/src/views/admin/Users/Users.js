import React, { useEffect, useState } from "react";
// Imports Externos
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
// Imports Internos
import api from "../../../services/api";
import { Container } from "./styles";

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
const getPrivilege = status => {
  switch (status) {
    case 1:
      return "Administrador";
    case 2:
      return "Colaborador";
    case 3:
      return "Usuário";
    default:
      return "Indefinido";
      break;
  }
};
const getBadge = status => {
  return status === "Ativo"
    ? "success"
    : status === "Bloqueado"
    ? "danger"
    : status === "Pendente"
    ? "warning"
    : "primary";
};

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

export default function Clients({ ...props }) {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const users = async () => {
      await api
        .get("users")
        .then(res => {
          res.data.map(user => {
            user.user_status = getPrivilege(user.user_status);
            if (!user.created_at) {
              user.created_at = "Indefinido";
            } else {
              user.created_at = formatDate(new Date(user.created_at));
            }
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
    { name: "id", label: "id" },
    { name: "username", label: "Nome" },
    { name: "email", label: "Email" },
    { name: "user_status", label: "Privilégio" },
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

  return (
    <Container>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Lista de clientes"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </Container>
  );
}
