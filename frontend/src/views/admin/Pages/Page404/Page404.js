import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row
} from "reactstrap";

class Page404 extends Component {
  render() {
    return (
      <div
        className="d-flex flex-row align-items-center"
        style={{ height: "400px" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Ops! Voce está Perdido.</h4>
                <p className="text-muted float-left">
                  A página que você está procurando não foi encontrada
                </p>
                <p className="text-muted float-left">
                  <Link to="/">Cliquei aqui</Link> para voltar na página
                  inicial.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
