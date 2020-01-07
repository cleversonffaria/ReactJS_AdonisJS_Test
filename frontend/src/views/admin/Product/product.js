import React, { useEffect, useState } from "react";
// Imports Externos
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import { Alert } from "reactstrap";
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

export default function Product({ ...props }) {
  const [product, setProduct] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const categoria = async () => {
      await api
        .get("products")
        .then(res => setProduct(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    categoria();
  }, []);

  const columns = [
    { name: "id", label: "ID" },
    {
      name: "image",
      label: "Imagem",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <img
            src={`http://localhost:3333/uploads/${value}`}
            alt="alt"
            width="50px"
          />
        )
      }
    },
    { name: "name", label: "Nome" },
    {
      name: "price",
      label: "Preço",
      options: {
        customBodyRender: value =>
          value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
          })
      }
    },
    { name: "category.name", label: "Categoria" },
    { name: "stock", label: "Estoque" },
    { name: "brand", label: "Marca" }
  ];
  // "imagem", "Nome", "Preço", "Categoria", "Estoque", "Marca"
  const options = {
    filterType: "dropdown",
    print: false,
    download: false,
    selectableRows: "none",
    onRowsDelete: () => alert("deletei"),
    onRowClick: res => props.history.push(`/admin/product/${res[0]}`),
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
            title={"Lista de Produtos"}
            data={product}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      )}
    </Container>
  );
}
