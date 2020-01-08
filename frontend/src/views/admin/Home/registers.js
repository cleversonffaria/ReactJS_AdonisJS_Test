import React, { useState } from "react";
import api from "../../../services/api";
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

export default function Register({ ...props }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    user_status: 3,
    password: "",
    rep_password: ""
  });
  const [error, setError] = useState({
    username: "",
    email: ""
  });
  const onChange = event => {
    const state = Object.assign({}, data);
    const campo = event.target.name;
    state[campo] = event.target.value;
    setData(state);
  };
  const handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password, rep_password } = data;
    if (!username || !email || !password || !rep_password) {
      setError({
        error: "Preencha todos os dados para se cadastrar!",
        color: "info"
      });
    } else if (password !== rep_password) {
      setError({
        error: "Senha não corresponde",
        color: "warning"
      });
    } else {
      try {
        const response = await api.post("/user", { username, email, password });
        if (response.status === 200) {
          setError({
            error: "Usuário cadastrado com sucesso!",
            color: "success"
          });
          setTimeout(() => props.history.push(`/admin/user`), 2000);
        } else {
          setError({
            error: response.data[0].message,
            color: "danger"
          });
        }
      } catch (err) {
        setError({
          error: "Ocorreu um erro ao registrar sua conta.",
          color: "danger"
        });
      }
    }
  };
  const validaEmail = data.email.split("@");
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="9" lg="7" xl="6">
          <Card className="mx-4">
            <CardBody className="p-4">
              <Form onSubmit={handleSignUp}>
                <h1>Registro</h1>
                <p className="text-muted">
                  Todos usuários cadastrado tem privilégio básico.
                </p>
                {error.error && (
                  <Alert color={error.color}>{error.error}</Alert>
                )}
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  {(!data.username && (
                    <Input
                      type="text"
                      name="username"
                      placeholder="Nome"
                      autoComplete="username"
                      onChange={event => onChange(event)}
                    />
                  )) ||
                    (data.username.length >= 5 && (
                      <Input
                        type="text"
                        name="username"
                        placeholder="Nome"
                        autoComplete="username"
                        valid
                        onChange={event => onChange(event)}
                      />
                    )) || (
                      <Input
                        type="text"
                        name="username"
                        placeholder="Nome"
                        autoComplete="username"
                        invalid
                        onChange={event => onChange(event)}
                      />
                    )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                  </InputGroupAddon>

                  {(!data.email && (
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={event => onChange(event)}
                    />
                  )) ||
                    (validaEmail[1] && (
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        valid
                        onChange={event => onChange(event)}
                      />
                    )) || (
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        invalid
                        onChange={event => onChange(event)}
                      />
                    )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  {(!data.password && (
                    <Input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      autoComplete="new-password"
                      onChange={event => onChange(event)}
                    />
                  )) ||
                    (data.password.length >= 6 && (
                      <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="new-password"
                        valid
                        onChange={event => onChange(event)}
                      />
                    )) || (
                      <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="new-password"
                        invalid
                        onChange={event => onChange(event)}
                      />
                    )}
                </InputGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  {(!data.rep_password && (
                    <Input
                      type="password"
                      name="rep_password"
                      placeholder="Repetir senha"
                      autoComplete="rep_password"
                      onChange={event => onChange(event)}
                    />
                  )) ||
                    (data.rep_password.length >= 6 &&
                      data.rep_password == data.password && (
                        <Input
                          type="password"
                          name="rep_password"
                          placeholder="Repetir senha"
                          autoComplete="rep_password"
                          valid
                          onChange={event => onChange(event)}
                        />
                      )) || (
                      <Input
                        type="password"
                        name="rep_password"
                        placeholder="Repetir senha"
                        autoComplete="rep_password"
                        invalid
                        onChange={event => onChange(event)}
                      />
                    )}
                </InputGroup>
                <Button className="btn_site" block>
                  Criar Conta
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
