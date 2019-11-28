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
  const [state, setState] = React.useState({
    columns: [
      { title: "Categoria", field: "name" },
      { title: "Descrição", field: "description" }
    ]
  });
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
  return (
    <>
      {message && (
        <Alert color={message === "Categoria editada!" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <MaterialTable
        title="Categorias"
        columns={state.columns}
        data={category}
        editable={{
          onRowAdd: newData => console.log(newData),
          onRowUpdate: async (newData, oldData) =>
            updateCat(newData, oldData, message),
          onRowDelete: oldData => console.log(oldData)
        }}
      />
    </>
  );
}
