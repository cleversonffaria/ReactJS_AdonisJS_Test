import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import api from "../../../services/api";
import { Alert } from "reactstrap";

export default function MaterialTableDemo(...props) {
  const [subcategory, setSubcategory] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const categoria = async () => {
      await api
        .get("subcategory")
        .then(res => setSubcategory(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    categoria();
  }, []);
  const [state] = React.useState({
    columns: [
      { title: "Subcategoria", field: "name" },
      { title: "Categoria", field: "category_id" },
      { title: "Produtos", field: "description" }
    ]
  });
  async function createCat(newData, message) {
    await api
      .post("subcategory", {
        name: newData.name,
        description: newData.description
      })
      .then(function(response) {
        if (response.data.message) {
          setMessage(response.data.message);
        } else if (response.data[0].message) {
          setMessage(response.data[0].message);
        }
      });
  }
  async function updateCat(newData, oldData, message) {
    await api
      .put("subcategory/" + oldData.id, {
        name: newData.name,
        description: newData.description
      })
      .then(function(response) {
        if (response.data.message) {
          setMessage(response.data.message);
        } else if (response.data[0].message) {
          setMessage(response.data[0].message);
        }
      });
  }
  async function deleteCat(oldData, message) {
    await api.delete("subcategory/" + oldData.id).then(function(response) {
      if (response.data.message) {
        setMessage(response.data.message);
      } else if (response.data[0].message) {
        setMessage(response.data[0].message);
      }
    });
  }
  const localizacao = {
    pagination: {
      labelRowsPerPage: "Linhas por página",
      labelDisplayedRows: "{from}-{to} de {count}",
      labelRowsSelect: "",
      firstAriaLabel: "Primeira Página",
      firstTooltip: "Primeira Página",
      previousAriaLabel: "Página Anterior",
      previousTooltip: "Página Anterior",
      nextAriaLabel: "Próxima Página",
      nextTooltip: "Próxima Página",
      lastAriaLabel: "Última Página",
      lastTooltip: "Última Página"
    },
    toolbar: {
      nRowsSelected: "{0} linha(s) selecionada(s)",
      searchTooltip: "Pesquisar",
      searchPlaceholder: "Pesquisar"
    },
    header: {
      actions: "Ação"
    },
    body: {
      emptyDataSourceMessage: "Não há registros a serem exibidos",
      filterRow: {
        filterTooltip: "Filtrar"
      },
      editRow: {
        deleteText: "Deletar",
        cancelTooltip: "Cancelar",
        saveTooltip: "Salvar"
      },
      editTooltip: "Editar",
      deleteTooltip: "Deletar",
      addTooltip: "Adicionar"
    }
  };
  
  return (
    <>
      {message && (
        <Alert
          color={
            message === "Subcategoria editada!" ||
            message === "Subcategoria criada com sucesso!" ||
            message === "Subcategoria excluida!"
              ? "success"
              : "danger"
          }
        >
          {message}
        </Alert>
      )}
      <MaterialTable
        title="Subcategorias"
        columns={state.columns}
        data={subcategory}
        editable={{
          onRowAdd: newData => createCat(newData, message),
          onRowUpdate: async (newData, oldData) =>
            updateCat(newData, oldData, message),
          onRowDelete: oldData => deleteCat(oldData, message)
        }}
        localization={localizacao}
      />
    </>
  );
}
