import React from "react";

import { Container } from "./style";
import { Line, Doughnut } from "react-chartjs-2";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { CircularProgress } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Widget01 from "./Widget01";

export default function Report() {
  const doughnut = {
    labels: ["Antena", "Modem", "Roteador", "Olt"],
    datasets: [
      {
        data: [30, 200, 50, 100],
        backgroundColor: ["#f96057", "#36A2EB", "#FFCE56", "#41af67"],
        hoverBackgroundColor: ["#f83c32", "#1b96e9", "#ffba1a", "#369457"]
      }
    ]
  };
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
        data: [1000, 500, 2000, 2],
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
  const ColorCircularProgress = withStyles({
    root: {
      color: "#4dbd74"
    }
  })(CircularProgress);

  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: theme.spacing(2),
      position: "relative"
    },
    loadProgress: {
      color: "#4dbd74",
      position: "absolute",
      top: -2,
      left: -3,
      zIndex: 2
    },
    completeProgress: {
      color: "#cacaca",
      position: "absolute",
      top: -2,
      left: -3,
      zIndex: 1
    },
    internProgress: {
      color: "#202020",
      width: "50px",
      height: "50px",
      fontSize: "18px",
      boxShadow: "none",
      background: "none"
    }
  }));
  const classes = useStyles();
  return (
    <Container className="animated fadeIn">
      <Row>
        <Col lg="8">
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <div className="cart_vendas">Vendas</div>
                </CardHeader>
                <CardBody>
                  <Row className="mb-2">
                    <Col lg="4">
                      <div className="title_vendas">Total</div>
                      <span className="relat_vendas text-success">
                        R$100,00
                      </span>
                    </Col>
                    <Col lg="4">
                      <div className="title_vendas">Produtos</div>
                      <span className="relat_vendas text-danger">500</span>
                    </Col>
                    <Col lg="4">
                      <div className="title_vendas">Usuários</div>
                      <span className="relat_vendas text-primary">20</span>
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
                smallText="10% Boleto"
                value="10"
                children={
                  <Widget01
                    color="info"
                    header=""
                    className="border-0 p-0"
                    mainText=""
                    smallText="53% Cartão de Credito"
                    value="53"
                    children=""
                  />
                }
              />
            </Col>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <div className="font-xl font-weight-bold">
                    Vendas por Região
                  </div>
                </CardHeader>
                <CardBody>
                  <div className={classes.wrapper}>
                    <div>
                      <Fab
                        aria-label="save"
                        color="primary"
                        className={classes.internProgress}
                      >
                        52%
                      </Fab>
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="52"
                        color="secondary"
                        variant="static"
                        className={classes.loadProgress}
                      />
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="100"
                        color="secondary"
                        variant="static"
                        className={classes.completeProgress}
                      />
                    </div>
                    <div className=" font-weight-bold">Minas Gerais</div>
                    <div className=" font-weight-bold arrecad_valor">
                      R$2,000.00
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    <div>
                      <Fab
                        aria-label="save"
                        color="primary"
                        className={classes.internProgress}
                      >
                        20%
                      </Fab>
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="20"
                        color="secondary"
                        variant="static"
                        className={classes.loadProgress}
                      />
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="100"
                        color="secondary"
                        variant="static"
                        className={classes.completeProgress}
                      />
                    </div>
                    <div className=" font-weight-bold">Espirito Santo</div>
                    <div className=" font-weight-bold arrecad_valor">
                      R$1,050.00
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    <div>
                      <Fab
                        aria-label="save"
                        color="primary"
                        className={classes.internProgress}
                      >
                        85%
                      </Fab>
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="85"
                        color="secondary"
                        variant="static"
                        className={classes.loadProgress}
                      />
                      <ColorCircularProgress
                        size={50}
                        thickness={3}
                        value="100"
                        color="secondary"
                        variant="static"
                        className={classes.completeProgress}
                      />
                    </div>
                    <div className=" font-weight-bold">Rio de Janeiro</div>
                    <div className=" font-weight-bold arrecad_valor">
                      R$81,000.00
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
          <Col lg="12">
              <Card>
                <CardHeader>
                  <div className="cart_vendas"> Produtos mais vendidos</div>
                </CardHeader>
                <CardBody className="d-flex justify-content-center">
                  <div className="chart-wrapper cart-vendido">
                    <Doughnut data={doughnut} />
                  </div>
                </CardBody>
              </Card>
            </Col>
      </Row>
    </Container>
  );
}
