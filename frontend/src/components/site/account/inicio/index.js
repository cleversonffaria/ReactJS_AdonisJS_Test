import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Badge, Row, Col } from "reactstrap";
import { Body, Menu } from "./style";

export default function Inicio({ user, ...props }) {
  return (
    <Body>
      <Card>
        <CardBody>
          <div className="edit">
            <span onClick={() => alert("Mudar foto")}>
              <div className="editImage">
                <i className="fa icons-camera4 fa-lg"></i>
              </div>
              <user.imagem
                className="imgPerfil"
                src={user.img}
                alt="imagem do usuário"
              />
            </span>
          </div>
          <div className="welcome">Olá, {user.usuario}</div>
          <div className="manager">
            Gerencie informações de usuário, acompanhe pedidos e veja os
            favoritos tudo por aqui.
          </div>
          <Menu>
            <Row>
              <Col xs="3">
                <Card>
                  <CardBody>Inicio</CardBody>
                </Card>
              </Col>
            </Row>
          </Menu>
        </CardBody>
      </Card>
    </Body>
  );
}
