import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Imports Externos
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
  Alert,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

// Imports Internos
import api from "../../../services/api";
import img_perfil from "../../../assets/perfil.jpg";
import { Cliente } from "./styles";

function titleize(text) {
  var words = text.toLowerCase().split(" ");
  for (var a = 0; a < words.length; a++) {
    var w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}
function dateDiferencaEmDias(a, b) {
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
}
function formatDate(date) {
  var monthNames = [
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
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " de " + monthNames[monthIndex] + " de " + year;
}
function paymentStatus(pedido) {
  switch (pedido.status_payment) {
    case true:
      return <div className="font-weight-bold text-success">Pago</div>;
    default:
      return <div className="font-weight-bold text-danger">Pendente</div>;
  }
}
// Fim imports
export default function User() {
  const { id } = useParams();
  // Databases
  const [data, setData] = useState();
  const [datauser, setDataUser] = useState();
  const [dataaddress, setDataAddress] = useState();
  const [datademand, setDataDemand] = useState();

  // Data Mensagens
  const [message, setMessage] = useState();
  const [messageaddress, setMessageAddress] = useState();
  const [messagedemand, setMessageDemand] = useState();
  const [status, setStatus] = useState();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [privilegio, setPrivilegio] = useState();

  const listaPedidos = {
    valorFinalizado: 0,
    totalFinalizado: 0,
    valorPendente: 0,
    totalPendente: 0,
    ultimoPedido: 0
  };

  function toggle(index) {
    setDropdownOpen(!index);
  }
  function user_Status(user) {
    switch (user) {
      case 1:
        return (
          <div className="font-weight-bold text-primary">Administrador</div>
        );
      case 2:
        return <div className="font-weight-bold text-danger">Colaborador</div>;
      case 3:
        return <div className="font-weight-bold text-success">Usuário</div>;
      default:
        return (
          <div className="font-weight-bold text-black-50">{privilegio}</div>
        );
    }
  }
  async function updateStatus(user, status) {
    setPrivilegio(status);
    await api
      .put(`user/${user.id}`, {
        user_status: status
      })
      .then(res => res.data)
      .catch(erro => setPrivilegio(erro.response.data.message));
  }
  function handdlePedido(pedido) {
    if (pedido.status_payment === true && pedido.status_delivery === 3) {
      listaPedidos.valorFinalizado += pedido.price;
      listaPedidos.totalFinalizado += 1;
    } else {
      listaPedidos.valorPendente += pedido.price;
      listaPedidos.totalPendente += 1;
    }
  }
  function handlestatus(e) {
    setStatus(!status);
  }
  useEffect(() => {
    const attStatus = async id => {
      await api
        .put(`profile/${id}`, { status: status })
        .catch(e => setMessage(e.response.data.message));
    };
    attStatus(id);
  }, [id, status]);

  useEffect(() => {
    const handdleUser = async id => {
      await api
        .get(`profile/${id}`)
        .then(res => {
          setData(res.data);
          setStatus(res.data.status);
        })
        .catch(e => setMessage(e.response.data.message));
      await api
        .get(`users/${id}`)
        .then(
          res => (setDataUser(res.data), setPrivilegio(res.data.user_status))
        )
        .catch(e => setMessage(e.response.data.message));
      await api
        .get(`address/${id}`)
        .then(res => setDataAddress(res.data))
        .catch(e => setMessageAddress(e.response.data.message));
      await api
        .get(`demand/${id}`)
        .then(res => setDataDemand(res.data))
        .catch(e => setMessageDemand(e.response.data.message));
    };
    handdleUser(id);
  }, [id]);
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
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={() => {
                      toggle(dropdownOpen);
                    }}
                    size="sm"
                  >
                    <DropdownToggle tag="span" className="cursor-pointer">
                      {user_Status(privilegio)}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => updateStatus(datauser, 3)}>
                        Usuário
                      </DropdownItem>
                      <DropdownItem onClick={() => updateStatus(datauser, 2)}>
                        Colaborador
                      </DropdownItem>
                      <DropdownItem onClick={() => updateStatus(datauser, 1)}>
                        Administrador
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button color="link">Editar</Button>
                </CardHeader>
                {(message && (
                  <Alert color="warning" className="m-0">
                    {message}
                  </Alert>
                )) ||
                  (data && (
                    <>
                      <CardBody className="d-flex">
                        <img
                          className="imagem_perfil"
                          src={img_perfil}
                          alt="Imagem de perfil"
                        />
                        <ul className="user_data">
                          <li className="name">
                            {titleize(data.firstname) +
                              " " +
                              titleize(data.lastname)}
                          </li>
                          <li className="cpf">{data.cpf}</li>
                          <li>
                            <i className="fa icon-location-pin fa-lg mr-2" />
                            <span>
                              Empresa:{" "}
                              {(data.company && data.company) ||
                                "Não informado"}
                            </span>
                          </li>
                          <li>
                            <i className="fa icon-calendar fa-lg mr-2" />
                            {(data.created_at && (
                              <span>
                                Criado em{" "}
                                {formatDate(new Date(data.created_at))}
                              </span>
                            )) || <span>Data de criação não informada</span>}
                          </li>
                          <li>
                            <i className="fa fa-lg mr-2 icon-envelope-letter" />
                            <span>
                              Email:{" "}
                              {(datauser && datauser.email && datauser.email) ||
                                "Não cadastrado"}
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-lg mr-2 icon-screen-smartphone" />
                            <span>
                              Contato:{" "}
                              {(data.contact && data.contact) ||
                                "Não informado"}
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-lg mr-2 icon-people" />
                            <span>
                              Sexo:{" "}
                              {(data.genre && titleize(data.genre)) ||
                                "Não informado"}
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-lg mr-2 icons-gift1" />
                            <span>
                              Nascimento:{" "}
                              {(data.birth &&
                                formatDate(new Date(data.birth))) ||
                                "Não informado"}
                            </span>
                          </li>
                        </ul>
                      </CardBody>
                    </>
                  ))}
              </Card>
            </Col>
            <Col xl="12">
              <Card>
                <CardHeader>
                  <span className="font-weight-bold font-lg header_edit">
                    Pedidos
                  </span>
                </CardHeader>
                {datademand &&
                  datademand.map(pedido => {
                    handdlePedido(pedido);
                    listaPedidos.ultimoPedido = pedido.created_at;
                    return "";
                  })}
                <CardBody>
                  <Row>
                    <Col>
                      <div className="d-flex align-items-center mb-4">
                        <i className="cui-check icons font-5xl mr-2 text-success" />
                        <div>
                          <div className="demand_final">Pedidos Finalizado</div>
                          <div className="demand_open text-success">
                            {listaPedidos.totalFinalizado} Pedido
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="icons-cart font-5xl mr-2 text-danger" />
                        <div>
                          <div className="demand_final">Pedidos Pendente</div>
                          <div className="demand_open text-danger">
                            {listaPedidos.totalPendente} Pedido
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm="12" md="8">
                      <ul className="demand_info">
                        <li>
                          <i className="fa fa-line-chart font-lg mr-2" />
                          <span>Total de compras finalizadas: </span>
                          {listaPedidos.valorFinalizado.toLocaleString(
                            "pt-br",
                            {
                              style: "currency",
                              currency: "BRL"
                            }
                          )}
                        </li>
                        <li>
                          <i className="icons-attach_money font-2xl mr-1" />
                          <span>Total de compras pendente: </span>
                          {listaPedidos.valorPendente.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                          })}
                        </li>
                        <li>
                          <i className="fa fa-calendar-check-o font-xl mr-2" />
                          <span>Último pedido realizado: </span>
                          <div>
                            {listaPedidos.ultimoPedido !== 0 &&
                              formatDate(new Date(listaPedidos.ultimoPedido)) +
                                " às " +
                                new Date(listaPedidos.ultimoPedido).getHours() +
                                ":" +
                                new Date(
                                  listaPedidos.ultimoPedido
                                ).getMinutes() +
                                "H" +
                                " - Há " +
                                dateDiferencaEmDias(
                                  new Date(listaPedidos.ultimoPedido),
                                  new Date()
                                ) +
                                " Dia(s)"}
                          </div>
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
                    {data && (
                      <AppSwitch
                        className={"mx-1"}
                        variant={"3d"}
                        color={"success"}
                        checked={status}
                        onChange={e => handlestatus(e)}
                      />
                    )}
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
                {(messageaddress && (
                  <Alert color="warning" className="m-auto">
                    {messageaddress}
                  </Alert>
                )) ||
                  (dataaddress && (
                    <CardBody>
                      <ul className="user_address">
                        <li className="address1">
                          Rua: {dataaddress.street} - Nº: {dataaddress.number} -
                          Referência: {dataaddress.reference}
                        </li>

                        <li className="address2">
                          {dataaddress.district} - {dataaddress.uf}
                        </li>
                        <li className="cep">
                          <span>Cep: </span>
                          {dataaddress.cep}
                        </li>
                      </ul>
                    </CardBody>
                  ))}
              </Card>
            </Col>
            <Col xl="12">
              {(messagedemand && (
                <Alert color="warning" className="m-auto">
                  {messagedemand}
                </Alert>
              )) ||
                (datademand && (
                  <>
                    {!datademand[0] && (
                      <Alert color="warning" className="m-auto">
                        Não existe pedidos para esse usuário
                      </Alert>
                    )}
                    <Card>
                      {datademand[0] && (
                        <>
                          <CardHeader>
                            <div className="font-weight-bold">Histórico</div>
                          </CardHeader>
                          <CardBody>
                            {datademand.map(pedido => (
                              <div
                                key={pedido.demand_id}
                                className="d-flex align-items-center mb-1 pb-1 border-bottom historyDemand"
                              >
                                <i className="fa fa-history fa-lg"></i>
                                <div className="ml-3">
                                  <div className="history_demand">
                                    Pedido #{pedido.demand_id} -{" "}
                                    {pedido.price.toLocaleString("pt-br", {
                                      style: "currency",
                                      currency: "BRL"
                                    })}
                                  </div>
                                  <div className="history_hrs">
                                    {formatDate(new Date(pedido.created_at))}
                                    {" às " +
                                      new Date(pedido.created_at).getHours() +
                                      ":" +
                                      new Date(pedido.created_at).getMinutes() +
                                      "H"}
                                  </div>
                                  {paymentStatus(pedido)}
                                </div>
                              </div>
                            ))}
                          </CardBody>
                        </>
                      )}
                    </Card>
                  </>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Cliente>
  );
}
