import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ModalHeader,
  ModalBody,
  Modal,
  Container,
  Row,
  Col,
  CardBody,
  Card,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Alert,
  Button
} from "reactstrap";
import { Content } from "./style";
import api from "../../../../services/api";

export default function Modals({ title, modal, setmodal, ...props }) {
  const [cadastrado, setCadastrado] = useState(true);

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
      props.history.push("/admin");
      // try {
      //   const response = await api.post("/login", { email, password });
      //   if (response) {
      //     if (response.data.token) {
      //       login(response.data.token);
      //       const user = await api.get("/user");
      //       setstatus(user.data.user_status);
      //     }
      //     props.history.push("/admin");
      //   }
      // } catch (err) {
      //   setColor("danger");
      //   setError("Houve um problema com o login, verifique suas credenciais.");
      // }
    }
  }
  // REGISTRAR
  const [username, setUsername] = useState();

  const handleSignUp = async e => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Preencha todos os dados para se cadastrar!");
      setColor("info");
    } else {
      try {
        const response = await api.post("/user", { username, email, password });
        if (response.status === 200) {
          setError("Usuário cadastrado com sucesso!");
          setColor("success");
          setTimeout(() => this.props.history.push("/login"), 3000);
        } else {
          setError(response.data[0].message);
          setColor("danger");
        }
      } catch (err) {
        setError("Ocorreu um erro ao registrar sua conta.");
        setColor("danger");
      }
    }
  };

  const toggle = () => {
    setmodal(!modal);
  };
  return (
    <Modal isOpen={modal} toggle={() => toggle()} className="modal-md ">
      <ModalHeader toggle={() => toggle()}>{title && title.title}</ModalHeader>
      <ModalBody>
        <Content>
          <Form onSubmit={handleSignUp}>
            {(cadastrado && (
              <React.Fragment>
                <p className="text-muted">
                  Faça o login para prosseguir com a compra!
                </p>
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
                    <Button color="success" className="px-4">
                      Entrar
                    </Button>
                    <Button
                      onClick={() => setCadastrado(!cadastrado)}
                      className="px-4 ml-3 btn_cadastrar"
                    >
                      Cadastrar
                    </Button>
                  </Col>
                  <Col xs="6" className="text-right">
                    <Button color="link" className="px-0">
                      Recuperar senha?
                    </Button>
                  </Col>
                </Row>
              </React.Fragment>
            )) || (
              <React.Fragment>
                <h1>Cadastre-se</h1>
                <p className="text-muted">Criar sua conta</p>
                {error && <Alert color={color}>{error}</Alert>}
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
                    onChange={e => setUsername(e.target.value)}
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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                  />
                </InputGroup>
                <Row>
                  <Col xs="6">
                    <Button color="success" block>
                      Criar Conta
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button
                      onClick={() => setCadastrado(!cadastrado)}
                      block
                      className="btn_cadastrar"
                    >
                      Já sou cadastrado
                    </Button>
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </Form>
        </Content>
      </ModalBody>
    </Modal>
  );
}
