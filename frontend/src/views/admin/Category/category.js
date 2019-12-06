import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import api from "../../../services/api";
import { Alert } from "reactstrap";

export default function MaterialTableDemo(...props) {
  const [category, setCategory] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    const categoria = async () => {
      await api
        .get("category")
        .then(res => setCategory(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    categoria();
  }, []);
  const [state] = useState({
    columns: [
      { title: "Categoria", field: "name" },
      { title: "Descrição", field: "description" }
    ]
  });
  async function createCat(newData, message) {
    await api
      .post("category", {
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
      .put("category/" + oldData.id, {
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
    await api.delete("category/" + oldData.id).then(function(response) {
      if (response.data.message) {
        setMessage(response.data.message);
      } else if (response.data[0].message) {
        setMessage(response.data[0].message);
      }
    });
  }
  const localizacao = {
    pagination: {
      labelRowsPerPage: "Linhas por páginas",
      labelDisplayedRows: "{from}-{to} de {count}",
      labelRowsSelect: "Linhas",
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
            message === "Categoria editada!" ||
            message === "Categoria criada com sucesso!" ||
            message === "Categoria excluida!"
              ? "success"
              : "danger"
          }
        >
          {message}
        </Alert>
      )}
      <MaterialTable
        title="Categorias"
        columns={state.columns}
        data={category}
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
