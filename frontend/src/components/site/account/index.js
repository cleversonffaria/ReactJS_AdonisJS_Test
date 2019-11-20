import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import imgPerfil from "../../../assets/perfil.jpg";
import { Body, MenuAccout, Imagem } from "./style";
import routes from "./routes";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center loading">
    <i className="fa fa-refresh fa-spin"></i> Carregando...
  </div>
);

export default function Account({ match, ...props }) {
  return (
    <Body>
      <Container fluid>
        <Row>
          <Col xs="2"className="menuAccount">
            <Card
              className="position-fixed"
              style={{ width: "280px", height: "430px" }}
            >
              <CardBody>
                <MenuAccout>
                  <div className="perfilAccount">
                    <Imagem src={imgPerfil} alt="Imagem de Perfil" />
                    <p>Cleverson Fernandes de Faria</p>
                  </div>
                  <Link to="/account/info">
                    <li
                      className={match.params.info === "info" ? "active" : null}
                    >
                      <i className="fa fa-address-card-o fa-lg mr-2"></i>
                      Informações pessoais
                    </li>
                  </Link>
                  <Link to="/account/demand">
                    <li
                      className={
                        match.params.info === "demand" ? "active" : null
                      }
                    >
                      <i className="fa icons-gift fa-lg mr-2"></i>
                      Compras
                    </li>
                  </Link>
                  <Link to="/account/favorite">
                    <li
                      className={
                        match.params.info === "favorite" ? "active" : null
                      }
                    >
                      <i className="fa icons-heart11 fa-lg mr-2"></i>
                      Favoritos
                    </li>
                  </Link>
                  <Link to="/account/security">
                    <li
                      className={
                        match.params.info === "security" ? "active" : null
                      }
                    >
                      <i className="fa icons-lock_outline fa-lg mr-2"></i>
                      Segurança
                    </li>
                  </Link>
                  <Link to="/admin">
                    <li>
                      <i className="fa fa-spin fa-cog fa-lg mr-2"></i>
                      Painel Administrativo
                    </li>
                  </Link>
                  <Link to="/">
                    <li>
                      <i className="fa icons-exit fa-lg mr-2"></i>
                      Sair
                    </li>
                  </Link>
                </MenuAccout>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" xl="9" className="colunaInfo">
            <React.Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component
                          user={{
                            img: imgPerfil,
                            imagem: Imagem,
                            usuario: "Cleverson Fernandes de Faria",
                            account: MenuAccout
                          }}
                          {...props}
                        />
                      )}
                    />
                  ) : null;
                })}
              </Switch>
            </React.Suspense>
          </Col>
        </Row>
      </Container>
    </Body>
  );
}
