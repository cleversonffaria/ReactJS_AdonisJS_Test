import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Content } from "./style";
import Modals from "./modal";

import img1 from "../../../assets/Alicat.png";
export default function Cart() {
  const [modal, setModal] = useState(false);
  const [modalinfo, setModalinfo] = useState();

  const toggle = () => {
    setModal(!modal);
  };
  const [card, setCard] = useState(1);
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <Content>
      <Modals
        title={modalinfo && modalinfo}
        modal={modal}
        setmodal={() => setModal()}
      />
      <Container fluid>
        <Form onSubmit={handleSubmit} method="post" className="form-horizontal">
          <Row>
            <Col xs="12">
              <div className="head_compra">
                <i className="fa icons-shopping-cart2"></i>
                <span>Carrinho</span>
              </div>
            </Col>
            <Col xs="12" md="12" lg="8">
              <Card>
                <CardBody>
                  <Row className="list_cart">
                    <Col xs="12" md="2" lg="2" className="cart_col">
                      <div className="img_cart">
                        <img src={img1} alt="imagex" width="100%" />
                      </div>
                    </Col>
                    <Col xs="12" md="5" lg="5" className="cart_col mb-3">
                      <div className="cat_cart">Wirelles</div>
                      <div className="product_cart">OLT NOME DO PRODU</div>
                    </Col>
                    <Col xs="6" md="2" lg="2" className="cart_col ">
                      <div className="d-flex align-items-center mb-2 mt-2">
                        <div
                          className="iconCardMinus iconCard"
                          onClick={() =>
                            card > 1 && setCard(parseInt(card) - 1)
                          }
                        >
                          <i className="fa icons-minus1"></i>
                        </div>
                        <Input
                          type="number"
                          className="inputCard"
                          value={card}
                          onChange={event => setCard(event.target.value)}
                        />
                        <div
                          className="iconCardPlus iconCard"
                          onClick={() =>
                            card < 6 && setCard(parseInt(card) + 1)
                          }
                        >
                          <i className="fa icons-plus1 "></i>
                        </div>
                      </div>
                      <div className="stock_cart">6 disponível</div>
                    </Col>
                    <Col xs="6" md="3" lg="3" className="cart_col">
                      <div className="price_cart"> R$:3,000.00</div>
                    </Col>
                    <div className="close_cart">
                      <i className="fa fa-close"></i>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <div className="clear_cart">
                <button className="btn_clear_cart">
                  <i className="fa fa-close mr-1"></i>
                  Limpar Carrinho
                </button>
              </div>
              <div className="clearB"></div>

              <FormGroup row className="justify-content-center">
                <Col md="7" className="mb-2">
                  <InputGroup>
                    <Input
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="Qual CEP para entrega?"
                    />
                    <InputGroupAddon addonType="prepend">
                      <Button type="button" color="success">
                        <i className="fa icons-calculator5"></i> Calcular
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col md="8">
                  <Card>
                    <CardHeader>ENDEREÇO DE ENTREGA</CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs="12">
                          <div className="end_name">
                            Cleverson Fernandes de Faria
                          </div>
                        </Col>
                        <Col
                          xs="12"
                          sm="2"
                          className="d-flex justify-content-center align-items-center ml-2"
                        >
                          <i className="fa fa-id-card-o end_icon"></i>
                        </Col>
                        <Col xs="9">
                          <div className="end_info">
                            <div className="end_rua">
                              <span className="font-weight-bold">Rua: </span>
                              <span className="info_rua mr-4">
                                Lorival cavichine
                              </span>
                              <span className="info_complemento">AP211</span>
                            </div>
                            <div>
                              <span className="font-weight-bold">Bairro: </span>
                              Belvedere
                            </div>
                            <div>
                              <span className="font-weight-bold">Cidade: </span>
                              Bom Jesus do Norte
                            </div>
                            <div>
                              <span className="font-weight-bold">Cep: </span>
                              29.460.000
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" className="d-flex justify-content-center">
                          <button className="btn_cart btn_blue">
                            <i className="fa fa-pencil mr-1"></i>
                            Editar
                          </button>
                          <button className="btn_cart btn_red">
                            <i className="fa fa-close mr-1"></i>
                            Excluir
                          </button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </FormGroup>
              <Card className="card_frete">
                <label>
                  <CardBody>
                    <Row>
                      <Col xs="2" md="2" lg="1" className="check_frete">
                        <input type="radio" name="frete" id="" value="25" />
                        {/* <i className="icons-checkbox-unchecked notcheck_frete"></i>
                        <i className="fa fa-check-square checked_frete"></i> */}
                      </Col>
                      <Col xs="" md="7" lg="8">
                        <div className="prest_frete">Braspress</div>
                        <div className="time_frete">
                          Prazo de entrega de 2 a 6 dias úteis
                        </div>
                      </Col>
                      <Col xs="" md="3" lg="3" className="check_frete">
                        <div className="price_frete">R$ 2,000.54</div>
                      </Col>
                    </Row>
                  </CardBody>
                </label>
              </Card>
              <Card className="card_frete">
                <label>
                  <CardBody>
                    <Row>
                      <Col xs="2" md="2" lg="1" className="check_frete">
                        <input type="radio" name="frete" id="" value="25" />
                        {/* <i className="icons-checkbox-unchecked notcheck_frete"></i>
                        <i className="fa fa-check-square checked_frete"></i> */}
                      </Col>
                      <Col xs="" md="7" lg="8">
                        <div className="prest_frete">Braspress</div>
                        <div className="time_frete">
                          Prazo de entrega de 2 a 6 dias úteis
                        </div>
                      </Col>
                      <Col xs="" md="3" lg="3" className="check_frete">
                        <div className="price_frete">R$ 2,000.54</div>
                      </Col>
                    </Row>
                  </CardBody>
                </label>
              </Card>
            </Col>
            <Col xs="12" md="12" lg="4">
              <Card>
                <CardBody>
                  <Row className="calc_subtotal">
                    <Col xs="8">Subtotal:</Col>
                    <Col xs="4" className="calc_price">
                      R$ 545,64
                    </Col>
                  </Row>
                  <Row className="calc_frete">
                    <Col xs="8">Frete:</Col>
                    <Col xs="4" className="calc_price">
                      R$ 5,64
                    </Col>
                  </Row>
                  <Row className="calc_total">
                    <Col xs="8">Total:</Col>
                    <Col xs="4" className="calc_price">
                      R$ 445,64
                    </Col>
                  </Row>
                  <div className="payment_demand">
                    <div className="price">
                      <i className="fa fa-credit-card"></i>
                      <div className="price_forward">
                        <div className="value_pacel">12x R$500,00</div>
                        <div>sem juros no cartão</div>
                      </div>
                    </div>
                    <div className="price">
                      <i className="fa fa-barcode"></i>
                      <div className="price_sight">
                        <div className="value">R$5,000.00</div>
                        <div>A vista com 22% de desconto</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="d-flex justify-content-center">
                  <Button
                    onClick={() => {
                      toggle();
                      setModalinfo({
                        title: "Minha Conta"
                      });
                    }}
                    color="success"
                  >
                    Continuar a compra
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </Content>
  );
}
