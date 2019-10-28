// Import de Bibliotecas
import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Container } from "./style";
import api from "../../services/api";

export default function Product({ totalPag,match }) {
  const [atual, setAtual] = useState();
  const [page, setPage] = useState("1");
  const [products, setProducts] = useState(true);
  function paginar(totalPag) {
    const paginas = [];
    for (let pag = 2; pag <= totalPag; pag++) {
      paginas.push(pag);
    }
    return paginas;
  }
  const pagReturn = pagAtual => {
    setAtual(pagAtual);
    setPage(pagAtual);
    setProducts(false);
  };
  function activePag() {
    setAtual(false);
    setPage(1);
    setProducts(true);
  }
  // Efetuar um Disparo para o redux e armazenar a variavel ( page ) dentro do store.
  // Os produtos ira observar o store e renderizar a page caso ela existir
  return (
    <Container>
      <Pagination>
        <PaginationItem>
          <PaginationLink previous tag="button" />
        </PaginationItem>
        <PaginationItem active={products}>
          {/* <Link to="/products/1/16"> */}
            <PaginationLink onClick={() => activePag()} tag="button">
              1
            </PaginationLink>
          {/* </Link> */}
        </PaginationItem>
        {paginar(totalPag).map(pagAtual => {
          return (
            <PaginationItem key={pagAtual} active={atual === pagAtual && true}>
              {/* <Link to={`/products/${pagAtual}/16`} > */}
                <PaginationLink onClick={() => pagReturn(pagAtual)} tag="button">
                  {pagAtual}
                </PaginationLink>
              {/* </Link> */}
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink next tag="button" />
        </PaginationItem>
      </Pagination>
    </Container>
  );
}
