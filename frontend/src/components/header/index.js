import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../../components";
import teacher1 from "../../assets/Logo.png";
import {
  MenuFixed,
  MenuNotFixed,
  MenuStart,
  MenuMiddle,
  MenuEnd,
  Img,
  ContainerContatos,
  ContainerMenu,
  Contact_Cart
} from "./style";
import { Container, Row, Col, Button } from "reactstrap";
export default function Header() {
  const [user, setUser] = useState(true);
  function logarUser() {
    setUser(!user);
  }
  return (
    <React.Fragment>
      {/* Menu inicial, desaparece depois que rola página */}
      <MenuNotFixed>
        <div className="menuNotFixed">
          <MenuStart>
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="estado">Espirito Santo</div>
            <div className="cidade">Apiacá</div>
          </MenuStart>
          <MenuMiddle>
            <div className="contact">
              <mark>22-997349644</mark> |{" "}
              <mark> cleversonffaria@gmail.com</mark>
            </div>
          </MenuMiddle>
          <MenuEnd>
            <div>
              <Link to="admin">
                <i className="icons-user8 fa-lg"></i>
                Minha Conta
              </Link>
            </div>
            <div className="register">
              <Link to="register">
                <i className="fa fa-user-plus fa-lg"></i>
                Registrar
              </Link>
            </div>
            <div>
              <Link to="login">
                <span>|</span>
                <i className="icons-lock2 fa-lg"></i>
                Login
              </Link>
            </div>
          </MenuEnd>
        </div>
        {/* Sub Menu, Logo, Search,Contato e Carrinho */}
        <ContainerMenu>
          <Container className="content">
            <Row>
              <Col xs="12" lg="2" md="12">
                <Link to="/">
                  <Img className="contentLogo" src={teacher1}></Img>
                </Link>
              </Col>
              <Col xs="12" lg="6" md="12">
                <div className="search">
                  <Search buscar="Busca"></Search>
                </div>
              </Col>
              <Col xs="6" lg="2" md="6">
                <ContainerContatos arrowPosition="157px">
                  <li>
                    <Contact_Cart>
                      <span className="baseIcon icons-mobile5"></span>
                      <span className="baseText">Contato</span>
                      <i className="baseArrow fa fa-chevron-down"></i>
                      <p className="baseInfo">(22) 99734-9644</p>
                    </Contact_Cart>
                    <ul className="subContato">
                      <span className="arrow"></span>
                      <li>
                        <i className="fa fa-envelope fa-lg"></i>
                        <span>Email@gmail.com</span>
                      </li>
                      <li>
                        <i className="icons-mobile_friendly"></i>
                        (28) 99734-9644
                      </li>
                      <li>
                        <i className="fa fa-whatsapp fa-lg"></i>
                        (22) 99885-4144
                      </li>
                      <li className="horarioFuncionamento">
                        <i className="fa fa-clock-o fa-lg"></i>
                        <strong>Horario de atendimento: </strong>
                        <br />
                        <span className="ml-5">
                          De Seg. a Sex das 8:00 as 18:00
                        </span>
                        <br />
                        <span className="ml-5">
                          Sábados das 08:00 as 13:00.
                        </span>
                      </li>
                      <li></li>
                      <li>
                        <p>
                          <strong>Siga-nos:</strong>
                        </p>
                        <Button
                          size="sm"
                          className="btn-facebook btn-brand mr-1 mb-1"
                        >
                          <i className="fa fa-facebook"></i>
                          <span>Facebook</span>
                        </Button>
                        <Button
                          size="sm"
                          className="btn-twitter btn-brand mr-1 mb-1"
                        >
                          <i className="fa fa-twitter"></i>
                          <span>Twitter</span>
                        </Button>
                        <Button
                          size="sm"
                          className="btn-instagram btn-brand mr-1 mb-1"
                        >
                          <i className="fa fa-instagram"></i>
                          <span>Instagram</span>
                        </Button>
                      </li>
                    </ul>
                  </li>
                </ContainerContatos>
              </Col>
              <Col xs="6" lg="2" md="6">
                <Contact_Cart>
                  <span class="baseIcon icons-shopping-cart2"></span>
                  <span className="baseText">Carrinho</span>
                  <p className="baseInfo">102 itens - R$ 11,305.00</p>
                </Contact_Cart>
              </Col>
            </Row>
          </Container>
        </ContainerMenu>
      </MenuNotFixed>
      {/* Quando a página rola este menu aparece */}
      <MenuFixed>
        <div className="menuFixed">
          <Row>
            <Col lg="2">
              <MenuStart>
                <Link to="/">
                  <Img src={teacher1}></Img>
                </Link>
              </MenuStart>
            </Col>
            <Col lg="5">
              <MenuMiddle>
                <div className="search_menu">
                  <Search></Search>
                </div>
              </MenuMiddle>
            </Col>
            <Col lg="5">
              <MenuEnd gridColum={user ? "170px 1fr 1fr 1fr" : "170px 1fr 1fr"}>
                <Contact_Cart className="mt-1">
                  <span class="baseIcon icons-shopping-cart2"></span>
                  <span className="baseText">Carrinho</span>
                  <p className="baseInfo">102 itens - R$ 11,305.00</p>
                </Contact_Cart>
                {user ? (
                  <React.Fragment>
                    <div className="mt-3">
                      <Link to="admin">
                        <i className="icons-user8 fa-lg"></i>
                        Minha Conta
                      </Link>
                    </div>
                    <div className="register mt-3">
                      <Link to="register">
                        <i className="fa fa-user-plus fa-lg"></i>
                        Registrar
                      </Link>
                    </div>
                    <div className="mt-3">
                      <Link onClick={() => logarUser()}>
                        <span>|</span>
                        <i className="icons-lock2 fa-lg"></i>
                        Login
                      </Link>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="register mt-2">
                      <Link to="admin">
                        Seja Bem Vindo! Cleverson Fernandes
                      </Link>
                    </div>
                    <div className="mt-3">
                      <Link onClick={() => logarUser()}>
                        <span>|</span>
                        <i className="icons-exit fa-lg"></i>
                        Sair
                      </Link>
                    </div>
                  </React.Fragment>
                )}
              </MenuEnd>
            </Col>
          </Row>
        </div>
      </MenuFixed>
    </React.Fragment>
  );
}
