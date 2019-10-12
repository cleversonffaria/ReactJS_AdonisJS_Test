import React, { Component } from "react";
import api from "../../../../services/api";
import {
  Button,
  Card,
  CardBody,
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

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
    color: ""
  };
  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({
        error: "Preencha todos os dados para se cadastrar!",
        color: "info"
      });
    } else {
      try {
        const response = await api.post("/user", { username, email, password });
        if (response.status === 200) {
          this.setState({
            error: "Usuário cadastrado com sucesso!",
            color: "success"
          });
          setTimeout(() => this.props.history.push("/login"), 3000);
        } else {
          this.setState({
            error: response.data[0].message,
            color: "danger"
          });
        }
      } catch (err) {
        this.setState({
          error: "Ocorreu um erro ao registrar sua conta.",
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
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSignUp}>
                    <h1>Registro</h1>
                    <p className="text-muted">Criar sua conta</p>
                    {this.state.error && (
                      <Alert color={this.state.color}>{this.state.error}</Alert>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Nome"
                        autoComplete="username"
                        onChange={e =>
                          this.setState({ username: e.target.value })
                        }
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Senha"
                        autoComplete="new-password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
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
                        placeholder="Repetir senha"
                        autoComplete="new-password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </InputGroup>
                    <Button color="success" block>
                      Criar Conta
                    </Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                        <span>Facebook</span>
                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block>
                        <span>Twitter</span>
                      </Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
