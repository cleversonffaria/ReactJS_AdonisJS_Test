import React, { useState, useEffect } from "react";
import { Container, Alert } from "reactstrap";

import { Products } from "../../../components";
import api from "../../../services/api";
// import { Container } from './style';

export default function Category(props) {
  const [message, setMessage] = useState();
  const [products, setProducts] = useState();
  useEffect(() => {
    const produtos = async () => {
      await api
        .get("product")
        .then(res => setProducts(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    produtos();
  }, []);
  return (
    (message && <Alert color="danger">{message}</Alert>) || (
      <Container fluid>
        <Products
          {...props}
          categoryTitle="Categoria"
          products={products}
          paginator={true}
        />
      </Container>
    )
  );
}
