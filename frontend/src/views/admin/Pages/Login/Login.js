import React, { Component } from "react";
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

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
    color: ""
  };
  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: "Preencha e-mail e senha para continuar!",
        color: "info"
      });
    } else {
      try {
        const response = await api.post("/login", { email, password });        
        login(response.data.token, response);
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais.",
          color: "danger"
        });
      }
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSignIn}>
                      <h1>Login</h1>
                      <p className="text-muted">Faça login em sua conta</p>
                      {this.state.error && (
                        <Alert color={this.state.color}>
                          {this.state.error}
                        </Alert>
                      )}
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
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
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
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            Entrar
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Recuperar senha?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Inscreva-se</h2>
                      <p>
                        Ao cadastrar em nosso site, você poderá adicionar
                        qualquer produto a sua lista de favoritos, realizar
                        compras e muito mais. <br />
                        Cadastre-se agora mesmo clicando no botão abaixo.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
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
}

export default withRouter(Login);
