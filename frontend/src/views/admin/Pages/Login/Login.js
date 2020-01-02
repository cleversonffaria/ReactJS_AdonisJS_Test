/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../../services/api";
import { login } from "../../../../services/auth";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Alert
} from "reactstrap";

function Login({ ...props }) {
  const [error, setError] = useState();
  const [color, setColor] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      setColor("info");
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/login", { email, password });
        if (response) {
          if (response.data.token) {
            login(response.data.token);
          }
          props.history.push("/admin");
        }
      } catch (err) {
        setColor("danger");
        setError("Houve um problema com o login, verifique suas credenciais.");
      }
    }
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleSignIn}>
                    <h1>Login</h1>
                    <p className="text-muted">Faça login em sua conta</p>
                    {error && <Alert color={color}>{error}</Alert>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Nome de usuário"
                        autoComplete="username"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button className="px-4 btn_site">
                          Entrar
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button className="px-0 btn_link">
                          Recuperar senha?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card
                className="text-white bg_site py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>Inscreva-se</h2>
                    <p>
                      Ao cadastrar em nosso site, você poderá adicionar qualquer
                      produto a sua lista de favoritos, realizar compras e muito
                      mais. <br />
                      Cadastre-se agora mesmo clicando no botão abaixo.
                    </p>
                    <Link to="/register">
                      <Button
                        className="mt-3 btn_dark_site"
                        active
                        tabIndex={-1}
                      >
                        Registrar Agora!
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Login);
