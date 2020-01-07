import React, { useEffect, useState } from "react";
// Imports Externos
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader, Row, Col, Alert } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

// Imports Internos
import api from "../../../services/api";
import Widget01 from "./Widget01";
import { Container } from "./style";

// Fim imports
export default function Report() {
  const [data, setData] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const handdleDemands = async () => {
      await api
        .get("demands")
        .then(res => setData(res.data))
        .catch(error => setMessage(error.response.data.message));
    };
    handdleDemands();
  }, []);
  const listaDados = {
    total: 0,
    produtos: 0,
    usuarios: 0
  };
  const payment = {
    total: 0,
    boleto: 0,
    cartao: 0,
    avista: 0,
    outros: 0
  };
  const user = {
    pagamento: [],
    usuario: [],
    demand: []
  };
  const listaValorMensal = {
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
      user.usuario.push(pedido.user_id);
      user.pagamento.push(pedido.status_payment);
      user.demand.push(pedido.demand_id);
      return pedido;
    });
  const userCallback = (value, index, self) => {
    if (self.indexOf(value) === index && user.pagamento[index]) {
      return true;
    } else {
      return false;
    }
  };
  const demandPG = (value, index, self) => {
    if (user.pagamento[index]) {
      return true;
    } else {
      return false;
    }
  };
  const pedidos = user.usuario.filter(demandPG);
  const users = user.usuario.filter(userCallback);

  data &&
    data.map(pedido => {
      if (pedido.status_payment) {
        listaDados.total += pedido.price;
      }
      switch (pedido.method_payment) {
        case "boleto":
          payment.boleto += 1;
          break;
        case "cartao":
          payment.cartao += 1;
          break;
        case "avista":
          payment.avista += 1;
          break;
        default:
          payment.outros += 1;
          break;
      }
      const mes = new Date(pedido.created_at).getMonth();
      const ano = new Date(pedido.created_at).getFullYear();
      const anoAtual = new Date().getFullYear();
      switch (mes) {
        case 0:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.jan += pedido.price;
            }
          }
          break;
        case 1:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.fev += pedido.price;
            }
          }
          break;
        case 2:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.mar += pedido.price;
            }
          }
          break;
        case 3:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.abr += pedido.price;
            }
          }
          break;
        case 4:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.mai += pedido.price;
            }
          }
          break;
        case 5:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.jun += pedido.price;
            }
          }
          break;
        case 6:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.jul += pedido.price;
            }
          }
          break;
        case 7:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.ago += pedido.price;
            }
          }
          break;
        case 8:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.set += pedido.price;
            }
          }
          break;
        case 9:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.out += pedido.price;
            }
          }
          break;
        case 10:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.nov += pedido.price;
            }
          }
          break;
        case 11:
          if (ano === anoAtual) {
            if (pedido.status_payment) {
              listaValorMensal.dez += pedido.price;
            }
          }
          break;
        default:
          break;
      }
      return pedido;
    });
  payment.total =
    payment.boleto + payment.avista + payment.cartao + payment.outros;
  const line = {
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
        label: "Vendas mensais",
        data: [
          listaValorMensal.jan.toFixed(2),
          listaValorMensal.fev.toFixed(2),
          listaValorMensal.mar.toFixed(2),
          listaValorMensal.abr.toFixed(2),
          listaValorMensal.mai.toFixed(2),
          listaValorMensal.jun.toFixed(2),
          listaValorMensal.jul.toFixed(2),
          listaValorMensal.ago.toFixed(2),
          listaValorMensal.set.toFixed(2),
          listaValorMensal.out.toFixed(2),
          listaValorMensal.nov.toFixed(2),
          listaValorMensal.dez.toFixed(2)
        ],
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
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
        <Col lg="8">
          <Row>
            <Col lg="12">
              {(message && <Alert color="info">{message}</Alert>) ||
                (data && (
                  <Card>
                    <CardHeader>
                      <div className="cart_vendas">Vendas</div>
                    </CardHeader>
                    <CardBody>
                      <Row className="mb-2">
                        <Col lg="4">
                          <div className="title_vendas">Total</div>
                          <span className="relat_vendas text-success">
                            {listaDados.total.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL"
                            })}
                          </span>
                        </Col>
                        <Col lg="4">
                          <div className="title_vendas">Pedidos</div>
                          <span className="relat_vendas text-danger">
                            {pedidos.length}
                          </span>
                        </Col>
                        <Col lg="4">
                          <div className="title_vendas">Usuários</div>
                          <span className="relat_vendas text-primary">
                            {users.length}
                          </span>
                        </Col>
                      </Row>
                      <div className="cart_subvendas">
                        Relatório de vendas deste ano
                      </div>
                      <Card>
                        <CardBody>
                          <div className="chart-wrapper">
                            <Line data={line} options={options} />
                          </div>
                        </CardBody>
                      </Card>
                    </CardBody>
                  </Card>
                ))}
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="12">
              <Widget01
                color="danger"
                header="Meios de pagamento"
                mainText=""
                smallText={
                  ((payment.boleto / payment.total) * 100).toFixed(1) +
                  "% Boleto"
                }
                value={((payment.boleto / payment.total) * 100).toString()}
                children={
                  <Widget01
                    color="info"
                    header=""
                    className="border-0 p-0"
                    mainText=""
                    smallText={
                      ((payment.cartao / payment.total) * 100).toFixed(1) +
                      "% Cartão de Credito"
                    }
                    value={((payment.cartao / payment.total) * 100).toString()}
                    children={
                      <Widget01
                        color="info"
                        header=""
                        className="border-0 p-0"
                        mainText=""
                        smallText={
                          ((payment.avista / payment.total) * 100).toFixed(1) +
                          "% Avista"
                        }
                        value={(
                          (payment.avista / payment.total) *
                          100
                        ).toString()}
                        children={
                          <Widget01
                            color="info"
                            header=""
                            className="border-0 p-0"
                            mainText=""
                            smallText={
                              ((payment.outros / payment.total) * 100).toFixed(
                                1
                              ) + "% Outros"
                            }
                            value={(
                              (payment.outros / payment.total) *
                              100
                            ).toString()}
                            children=""
                          />
                        }
                      />
                    }
                  />
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
