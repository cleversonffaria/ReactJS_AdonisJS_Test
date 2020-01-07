import React, { useState, useEffect } from "react";
// Imports Externos
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { Card, CardBody, FormText, Col, Row, Alert } from "reactstrap";

// Imports Internos
import Widget01 from "./Widget01";
import { Container } from "./style";
import api from "../../../services/api";
// Fim imports
function calcula_porcent(a, b) {
  if (a && b) {
    return (a / (a + b)) * 100;
  } else {
    return 0;
  }
}
export default function Home({ ...props }) {
  const [data, setData] = useState();
  const [demand, setDemand] = useState({});

  var listaPedidos = {
    aprovado: 0,
    valor_aprovado: 0,
    reprovado: 0,
    valor_reprovado: 0,
    total: 0
  };
  useEffect(() => {
    const haddleData = async () => {
      await api
        .get("demands")
        .then(res => setData(res.data))
        .catch(e => e);
    };
    haddleData();
  }, []);

  const listaPedidosMensal = {
    jan: 0,
    fev: 0,
    mar: 0,
    abr: 0,
    mai: 0,
    jun: 0,
    jul: 0,
    ago: 0,
    set: 0,
    out: 0,
    nov: 0,
    dez: 0
  };
  data &&
    data.map(pedido => {
      if (pedido.status_payment) {
        listaPedidos.aprovado += 1;
        listaPedidos.valor_aprovado += pedido.price;
      } else {
        listaPedidos.reprovado += 1;
        listaPedidos.valor_reprovado += pedido.price;
      }
      const mes = new Date(pedido.created_at).getMonth();
      const ano = new Date(pedido.created_at).getFullYear();
      const anoAtual = new Date().getFullYear();
      switch (mes) {
        case 0:
          if (ano === anoAtual) {
            listaPedidosMensal.jan += 1;
          }
          break;
        case 1:
          if (ano === anoAtual) {
            listaPedidosMensal.fev += 1;
          }
          break;
        case 2:
          if (ano === anoAtual) {
            listaPedidosMensal.mar += 1;
          }
          break;
        case 3:
          if (ano === anoAtual) {
            listaPedidosMensal.abr += 1;
          }
          break;
        case 4:
          if (ano === anoAtual) {
            listaPedidosMensal.mai += 1;
          }
          break;
        case 5:
          if (ano === anoAtual) {
            listaPedidosMensal.jun += 1;
          }
          break;
        case 6:
          if (ano === anoAtual) {
            listaPedidosMensal.jul += 1;
          }
          break;
        case 7:
          if (ano === anoAtual) {
            listaPedidosMensal.ago += 1;
          }
          break;
        case 8:
          if (ano === anoAtual) {
            listaPedidosMensal.set += 1;
          }
          break;
        case 9:
          if (ano === anoAtual) {
            listaPedidosMensal.out += 1;
          }
          break;
        case 10:
          if (ano === anoAtual) {
            listaPedidosMensal.nov += 1;
          }
          break;
        case 11:
          if (ano === anoAtual) {
            listaPedidosMensal.dez += 1;
          }
          break;
        default:
          break;
      }
      return "";
    });
  const bar = {
    labels: [
      `Janeiro`,
      `Fevereiro`,
      `Março`,
      `Abril`,
      `Maio`,
      `Junho`,
      `Julho`,
      `Agosto`,
      `Setembro`,
      `Outubro`,
      `Novembro`,
      `Dezembro`
    ],
    datasets: [
      {
        label: `Pedidos de ${new Date().getFullYear()}`,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          listaPedidosMensal.jan,
          listaPedidosMensal.fev,
          listaPedidosMensal.mar,
          listaPedidosMensal.abr,
          listaPedidosMensal.mai,
          listaPedidosMensal.jun,
          listaPedidosMensal.jul,
          listaPedidosMensal.ago,
          listaPedidosMensal.set,
          listaPedidosMensal.out,
          listaPedidosMensal.nov,
          listaPedidosMensal.dez
        ]
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
              smallText="Criar ou editar categorias"
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/product/view">
            <Widget01
              color="success"
              value="100"
              header="Produtos"
              mainText=""
              smallText="Veja todos produtos cadastrados"
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/demand/all">
            <Widget01
              color="danger"
              value="100"
              mainText=""
              header="Vendas"
              smallText={`Existe ${listaPedidos.reprovado} vendas pendentes`}
            />
          </Link>
        </Col>
        <Col md="3">
          <Link className="linkwidget" to="admin/user">
            <Widget01
              color="warning"
              value="100"
              header="Clientes"
              mainText=""
              smallText="Veja todos clientes cadastrados"
            />
          </Link>
        </Col>
        <Col md="8" className="m-auto">
          {(data && (
            <Card>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} options={options} />
                </div>
                <Row>
                  <Col xs="12">
                    <Row className="chart_status">
                      <Col>
                        <strong>
                          {calcula_porcent(
                            listaPedidos.aprovado,
                            listaPedidos.reprovado
                          ).toFixed(2)}
                          %
                        </strong>
                      </Col>
                      <Col className="success">Aprovado</Col>
                      <Col className="font-weight-bold">
                        {listaPedidos.aprovado} pedidos
                      </Col>
                      <Col className="font-weight-bold">
                        {listaPedidos.valor_aprovado.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </Col>
                    </Row>
                    <Row className="chart_status">
                      <Col>
                        <strong>
                          {calcula_porcent(
                            listaPedidos.reprovado,
                            listaPedidos.aprovado
                          ).toFixed(2)}
                          %
                        </strong>
                      </Col>
                      <Col className="danger">Pendente</Col>
                      <Col className="font-weight-bold">
                        {listaPedidos.reprovado} pedidos
                      </Col>
                      <Col className="font-weight-bold">
                        {listaPedidos.valor_reprovado.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )) || (
            <Alert color="info">
              Não existe pedidos registrado no sistema!
            </Alert>
          )}
        </Col>
        <Col md="12">
          <Row>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer config_user"
                  onClick={() => {
                    console.log("ABRIR MODAL");
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
                    props.history.push("/admin/contributors");
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
                    props.history.push("/admin/registers");
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
