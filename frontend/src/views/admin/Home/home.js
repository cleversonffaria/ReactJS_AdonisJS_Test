import React from "react";
import { Link } from "react-router-dom";
import Widget01 from './Widget01';

// import { Container } from "./style";
import { Card, CardBody, Row, Col } from "reactstrap";

export default function Report() {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col md="3"><Widget01 color="primary" value="100" header="Categorias" mainText="oi" smallText="nada" /></Col>
        <Col md="3"><Widget01 color="success" value="100" header="Produtos" mainText="oi" smallText="nada" /></Col>
        <Col md="3"><Widget01 color="danger" value="100" header="Vendas" mainText={<Link to="admin/demand/all">Clique aqui</Link>} smallText="Existe 10 vendas pendentes" /></Col>
        <Col md="3"><Widget01 color="warning" value="100" header="Clientes" mainText="oi" smallText="nada" /></Col>
      </Row>
    </div>
  );
}
