// Import de Bibliotecas
import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Container } from "./style";

export default function Product({ totalPag }) {
  const [atual, setAtual] = useState();
  function paginar(totalPag) {
    const paginas = [];
    for (let pag = 1; pag <= totalPag; pag++) {
      paginas.push(pag);
    }
    return paginas;
  }
  return (
    <Container>
      <Pagination>
        <PaginationItem>
          <PaginationLink previous tag="button" />
        </PaginationItem>
        {/* <PaginationItem active disabled>
          <PaginationLink tag="button">1</PaginationLink>
        </PaginationItem> */}
        {paginar(totalPag).map(totalPags => {
          return (
            <PaginationItem active={atual === totalPags && "active"} key={totalPags}>
              <PaginationLink onClick={() => setAtual(totalPags)} tag="button">
                {totalPags}
              </PaginationLink>
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
