/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import * as router from "react-router-dom";
import { Search } from "../../components";
import teacher1 from "../../assets/Logo.png";

import { AppSidebarToggler } from "@coreui/react";
import {
  MenuFixed,
  MenuNotFixed,
  MenuStart,
  MenuMiddle,
  MenuEnd,
  Img,
  ContainerContatos,
  ContainerMenu,
  Contact_Cart,
  ModoTablet,
  ModoDesktop
} from "./style";
import { Container, Row, Col, Button } from "reactstrap";
export default function Header({ ...props }) {
  const [user, setUser] = useState(true);
  function logarUser() {
    setUser(!user);
  }
  function cart() {
    return (
      <Contact_Cart>
        <span className="baseIcon icons-shopping-cart2"></span>
        <span className="baseText">Carrinho</span>
        <p className="baseInfo">102 itens - R$ 11,305.00</p>
      </Contact_Cart>
    );
  }
  function contact() {
    return (
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
              <a href="mailto:vendas@gmail.com.br">Email@gmail.com</a>
            </li>
            <li>
              <i className="icons-mobile_friendly"></i>
              <a href="tel:55(22)997349644">(28) 99734-9644</a>
            </li>
            <li>
              <i className="fa fa-whatsapp fa-lg"></i>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5522997349644"
              >
                (22) 99885-4144
              </a>
            </li>
            <li>
              <i className="fa fa-clock-o fa-lg"></i>
              <strong>Horario de atendimento: </strong>
              <br />
              <span className="ml-5">De Seg. a Sex das 8:00 as 18:00</span>
              <br />
              <span className="ml-5">Sábados das 08:00 as 13:00.</span>
            </li>
            <li></li>
            <li>
              <p>
                <strong>Siga-nos:</strong>
              </p>
              <Button size="sm" className="btn-facebook btn-brand mr-1 mb-1">
                <i className="fa fa-facebook"></i>
                <span>Facebook</span>
              </Button>
              <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1">
                <i className="fa fa-twitter"></i>
                <span>Twitter</span>
              </Button>
              <Button size="sm" className="btn-instagram btn-brand mr-1 mb-1">
                <i className="fa fa-instagram"></i>
                <span>Instagram</span>
              </Button>
            </li>
          </ul>
        </li>
      </ContainerContatos>
    );
  }
  return (
    <React.Fragment>
      {/* Menu inicial, desaparece depois que rola página */}
      <MenuNotFixed>
        <div className="menuNotFixed">
          <AppSidebarToggler
            className="d-lg-none btnMenuMobile icons-th-menu"
            display="md"
            mobile
          />
          <MenuStart>
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="estado">Espirito Santo</div>
            <div className="cidade">Apiacá</div>
          </MenuStart>
          <MenuMiddle>
            <div className="contact">
              <mark>22-997349644</mark> |<mark> cleversonffaria@gmail.com</mark>
            </div>
          </MenuMiddle>
          <MenuEnd>
            <div className="minhaconta">
              <router.Link to="/account/home">
                <i className="icons-user8 fa-lg"></i>
                Minha Conta
              </router.Link>
            </div>
            <div className="register">
              <router.Link to="/register">
                <i className="fa fa-user-plus fa-lg"></i>
                Registrar
              </router.Link>
            </div>
            <div className="login">
              <router.Link to="/login">
                <span>|</span>
                <i className="icons-lock2 fa-lg"></i>
                Login
              </router.Link>
            </div>
          </MenuEnd>
        </div>

        {/* Menu secundário não fixado.*/}
        <main className="main">
          <ContainerMenu>
            <Container className="content">
              <Row>
                <Col xs="12" lg="2" md="5">
                  <Img className="d-block m-auto p-1" src={teacher1}></Img>
                </Col>
                <ModoTablet>
                  <Row>
                    <Col sm="6" lg="6" md="6">
                      {contact()}
                    </Col>
                    <Col sm="6" lg="6" md="6">
                      {cart()}
                    </Col>
                  </Row>
                </ModoTablet>
                <Col xs="12" md="12" lg="5">
                  <div className="search">
                    <Search buscar="Busca"></Search>
                  </div>
                </Col>
                <Col lg="5" md="6">
                  <ModoDesktop>
                    <Row>
                      <Col lg="5" md="6">
                        {contact()}
                      </Col>
                      <Col lg="5" md="6">
                        {cart()}
                      </Col>
                    </Row>
                  </ModoDesktop>
                </Col>
              </Row>
            </Container>
          </ContainerMenu>
        </main>
      </MenuNotFixed>
      {/* Quando a página rola este menu aparece */}
      <MenuFixed>
        <div className="menuFixed">
          <Row>
            <Col className="col_img" lg="2">
              <MenuStart>
                <router.Link to="/#">
                  <Img src={teacher1}></Img>
                </router.Link>
              </MenuStart>
            </Col>
            <Col className="col_search" md="5" lg="5">
              <MenuMiddle>
                <div className="search_menu">
                  <Search></Search>
                </div>
              </MenuMiddle>
            </Col>
            <Col className="col_infor" lg="5">
              <MenuEnd
                gridColum={user ? "auto auto auto auto" : "auto 1fr 1fr"}
              >
                <div className="mt-4">
                  <router.Link to="/admin">
                    <span className="fa-lg icons-shopping-cart2"></span>
                    Carrinho
                  </router.Link>
                </div>
                {user ? (
                  <React.Fragment>
                    <div className="mt-4">
                      <router.Link to="/account/home">
                        <i className="icons-user8 fa-lg"></i>
                        Minha Conta
                      </router.Link>
                    </div>
                    <div className="register mt-4">
                      <router.Link to="/register">
                        <i className="fa fa-user-plus fa-lg"></i>
                        Registrar
                      </router.Link>
                    </div>
                    <div className="mt-4">
                      <router.Link to="/#" onClick={() => logarUser()}>
                        <span>|</span>
                        <i className="icons-lock2 fa-lg"></i>
                        Login
                      </router.Link>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="register mt-3">
                      <router.Link to="/admin">
                        Seja Bem Vindo! Cleverson Fernandes
                      </router.Link>
                    </div>
                    <div className="mt-4">
                      <router.Link to="/#" onClick={() => logarUser()}>
                        <span>|</span>
                        <i className="icons-exit fa-lg"></i>
                        Sair
                      </router.Link>
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
