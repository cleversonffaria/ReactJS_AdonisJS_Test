import React from "react";
// Imports Externos
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import {
  Card,
  CardBody,
  FormText,
  Col,
  Row,
} from "reactstrap";

// Imports Internos
import Widget01 from "./Widget01";
import { Container } from "./style";

// Fim imports

export default function Home() {
  const bar = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Pedidos",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40, 0, 32, 11, 29, 12]
      }
    ]
  };
  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  };

  return (
    <Container className="animated fadeIn">
      <Row>
        <Col md="3">
          <Link className="linkwidget" to="admin/category">
            <Widget01
              color="primary"
              value="150"
              header="Categorias"
              mainText=""
              smallText="Existe 150 categorias cadastradas"
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/product/view">
            <Widget01
              color="success"
              value="10"
              header="Produtos"
              mainText=""
              smallText="Existe 10 produtos cadastrados"
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/demand/all">
            <Widget01
              color="danger"
              value="10"
              mainText=""
              header="Vendas"
              smallText="Existe 10 vendas pendentes"
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/user">
            <Widget01
              color="warning"
              value="50"
              header="Clientes"
              mainText=""
              smallText="Existe 50 clientes cadastrados"
            />
          </Link>
        </Col>
        <Col md="8" className="m-auto">
          <Card>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
              <Row>
                <Col xs="12">
                  <Row className="chart_status">
                    <Col>
                      <strong>81%</strong>
                    </Col>
                    <Col className="success">Aprovado</Col>
                    <Col className="font-weight-bold">50 pedidos</Col>
                    <Col className="font-weight-bold">R$ 1.054,00</Col>
                  </Row>
                  <Row className="chart_status">
                    <Col>
                      <strong>19%</strong>
                    </Col>
                    <Col className="danger">Pendentes</Col>
                    <Col className="font-weight-bold">10 pedidos</Col>
                    <Col className="font-weight-bold">R$ 1.054,00</Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="12">
          <Row>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer config_user"
                  onClick={() => {
                    alert("ir para colaborador");
                  }}
                >
                  <i className="fa fa-user fa-lg d-block font-5xl mb-2"></i>
                  <strong>Perfil</strong>
                  <FormText className="help-block">
                    Visualizar, editar o perfil logado no sistema.
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer config_user"
                  onClick={() => {
                    alert("ir para colaborador");
                  }}
                >
                  <i className="fa fa-users fa-lg d-block font-5xl mb-2"></i>
                  <strong>Colaboradores</strong>
                  <FormText className="help-block">
                    Visualizar, editar e exluir colaboradores do sistema.
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer config_user"
                  onClick={() => {
                    alert("ir para colaborador");
                  }}
                >
                  <i className="fa fa-user-plus fa-lg d-block font-5xl mb-2"></i>
                  <strong>Cadastrar</strong>
                  <FormText className="help-block">
                    Cadastre colaboradores no sistema de um jeito simples e
                    rápido.
                  </FormText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
