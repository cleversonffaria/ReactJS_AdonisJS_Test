import React from "react";
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
  ContainerMenu
} from "./style";
import { Container, Row, Col } from "reactstrap";
export default function Header() {
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
            <Link to="admin">
              <i className="fa fa-user-circle-o fa-lg"></i>
              Minha Conta
            </Link>
            <Link to="register" className="register">
              <i className="fa fa-user-plus fa-lg"></i>
              Registrar
            </Link>
            <Link to="login">
              <span>|</span>
              <i className="fa fa-lock fa-lg"></i>
              Login
            </Link>
          </MenuEnd>
        </div>
        {/* Sub Menu, Logo, Search,Contato e Carrinho */}
        <ContainerMenu>
          <Container>
            <Row>
              <Col>
                <Img src={teacher1}></Img>
              </Col>
              <Col lg="5">
                <div className="search">
                  <Search buscar="Busca"></Search>
                </div>
              </Col>
              <Col>
                <ul>
                  <li>
                    <span>Contato</span>
                    <i className="fa fa-chevron-down"></i>
                    <p>22-997349644</p>
                    <ul>
                      <li>Email@gmail.com</li>
                      <li>(28)99734-9644</li>
                      <li>(22)99885-4144</li>
                      <li>Horario de atendimento</li>
                      <li>
                        De Seg. a Sex das 8:00 as 18:00
                        <p> Sábados das 08:00 as 13:00. </p>
                      </li>
                      <li>Siga-nos </li>
                    </ul>
                  </li>
                </ul>
              </Col>
              <Col>Carrinho</Col>
            </Row>
          </Container>
        </ContainerMenu>
      </MenuNotFixed>
      {/* Quando a página rola este menu aparece */}
      <MenuFixed>
        <div className="menuFixed">
          <MenuStart>
            <Img src={teacher1}></Img>
          </MenuStart>
          <MenuMiddle>
            <div className="search_menu">
              <Search></Search>
            </div>
          </MenuMiddle>
          <MenuEnd>
            <Link to="admin">
              <i className="fa fa-user-circle-o fa-lg"></i>
              Minha Conta
            </Link>
            <Link to="register" className="register">
              <i className="fa fa-user-plus fa-lg"></i>
              Registrar
            </Link>
            <Link to="login">
              <span>|</span>
              <i className="fa fa-lock fa-lg"></i>
              Login
            </Link>
          </MenuEnd>
        </div>
      </MenuFixed>
    </React.Fragment>
  );
}
