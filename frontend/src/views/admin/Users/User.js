import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Imports Externos
import { Card, CardBody, CardHeader, Row, Col, Button } from "reactstrap";
import { AppSwitch } from "@coreui/react";
// Imports Internos
import api from "../../../services/api";
import img_perfil from "../../../assets/perfil.jpg";
import { Cliente } from "./styles";

// Fim imports
export default function User() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [message, setMessage] = useState();

  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handdleUser = async id => {
      await api
        .get(`users/${id}`)
        .then(res => setData(res.data))
        .catch(error =>
          setMessage("Não existe usuário cadastrado no sistema.")
        );
    };
    handdleUser(id);
  }, []);

  return (
    <Cliente className="animated fadeIn">
      <Row>
        <Col xl="8">
          <Row>
            <Col xl="12">
              <Card>
                <CardHeader className="d-flex align-items-center justify-content-between">
                  <span className="font-weight-bold font-lg header_edit">
                    Dados
                  </span>
                  <Button color="link">Editar</Button>
                </CardHeader>
                <CardBody className="d-flex">
                  <img
                    className="imagem_perfil"
                    src={img_perfil}
                    alt="Imagem de perfil"
                  />
                  <ul className="user_data">
                    <li className="name">Nome do cliente</li>
                    <li className="cpf">123.595.027.44</li>
                    <li>
                      <i className="fa icon-location-pin fa-lg mr-2" />
                      <span>Empresa se tiver</span>
                    </li>
                    <li>
                      <i className="fa icon-calendar fa-lg mr-2" />
                      <span>Criado em 29/07/2019 - 13:11h</span>
                    </li>
                    <li>
                      <i className="fa fa-lg mr-2 icon-envelope-letter" />
                      <span>cleversonffaria@gmail.com</span>
                    </li>
                    <li>
                      <i className="fa fa-lg mr-2 icon-screen-smartphone" />
                      <span>(22)99734-9644</span>
                    </li>
                    <li>
                      <i className="fa fa-lg mr-2 icon-people" />
                      <span>Masculino</span>
                    </li>
                    <li>
                      <i className="fa fa-lg mr-2 icons-gift1" />
                      <span>27/06/1995 - 24 Anos</span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col xl="12">
              <Card>
                <CardHeader>
                  <span className="font-weight-bold font-lg header_edit">
                    Pedidos
                  </span>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <div className="d-flex align-items-center mb-4">
                        <i className="cui-check icons font-5xl mr-2 text-success" />
                        <div>
                          <div className="demand_final">Pedidos Finalizado</div>
                          <div className="demand_open text-success">
                            1 Pedido
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="icons-cart font-5xl mr-2 text-danger" />
                        <div>
                          <div className="demand_final">Pedidos Pendente</div>
                          <div className="demand_open text-danger">
                            5 Pedido
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm="12" md="8">
                      <ul className="demand_info">
                        <li>
                          <i className="fa fa-line-chart font-lg mr-2" />
                          <span>Total de compras finalizadas: </span>R$160,00
                        </li>
                        <li>
                          <i className="icons-attach_money font-2xl mr-1" />
                          <span>Total de compras pendente: </span>R$500,00
                        </li>
                        <li>
                          <i className="fa fa-calendar-check-o font-xl mr-2" />
                          <span>Último pedido realizado: </span>
                          <div> 29/07/2019 - 13:15h (24 dias atrás)</div>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl="4">
          <Row>
            <Col xl="12">
              <Card>
                <CardBody className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <AppSwitch
                      className={"mx-1"}
                      variant={"3d"}
                      color={"success"}
                      defaultChecked
                      onChange={e => setStatus(e.target.checked)}
                    />
                    {(status === true && (
                      <span className="font-lg font-weight-bold text-success ml-2">
                        Ativo
                      </span>
                    )) ||
                      (status === false && (
                        <span className="font-lg font-weight-bold text-danger ml-2">
                          Bloqueado
                        </span>
                      ))}
                  </div>
                  <Button
                    className="d-flex align-items-center font-lg font-weight-bold"
                    color="ghost-danger"
                  >
                    <i className="icons-refresh2 mr-2 font-xl" />
                    <span>Resetar Senha</span>
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col xl="12">
              <Card>
                <CardHeader className="d-flex align-items-center justify-content-between">
                  <span className="font-weight-bold font-lg header_edit">
                    Endereço
                  </span>
                  <Button color="link">Editar</Button>
                </CardHeader>
                <CardBody>
                  <ul className="user_address">
                    <li className="address1">
                      Rua Carlos Firmo - N 255 - Apto 215
                    </li>
                    <li className="address2">
                      Belvedere Nordebert - Espirito Santo
                    </li>
                    <li className="cep">
                      <span>Cep: </span>29460.000
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col xl="12">
              <Card>
                <CardBody>
                  <div className="font-weight-bold">Histórico</div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-history fa-lg"></i>
                    <div className="ml-3">
                      <div className="history_demand">
                        Pedido #00145 - R$ 155,00
                      </div>
                      <div className="history_hrs">
                        29/05/2019 às 14:55h - Pendente
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Cliente>
  );
}
