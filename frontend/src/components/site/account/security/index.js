import React, { useState } from "react";
import {
  Card,
  CardBody,
  Form,
  FormText,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
  Label,
  Input,
  Button
} from "reactstrap";
import { Body } from "./style";

export default function Security() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  const handleSubmit = event => {
    event.preventDefault();
    alert("Vou enviar");
  };
  return (
    <Body>
      <Card>
        <CardBody>
          <h4 className="welcome">Segurança</h4>
          <Row>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer"
                  onClick={() => {
                    toggle();
                    setType("password");
                  }}
                >
                  <i className="fa icon-lock fa-lg d-block font-5xl mb-2"></i>
                  Alterar Senha
                  <FormText className="help-block">
                    É necessário o e-mail válido para realizar está operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer"
                  onClick={() => {
                    toggle();
                    setType("email");
                  }}
                >
                  <i className="fa icon-envelope-open fa-lg d-block font-5xl mb-2"></i>
                  Alterar e-mail
                  <FormText className="help-block">
                    É necessário usuário e senha válidos, para realizar está
                    operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card className="w-100">
                <CardBody
                  className="cursor-pointer"
                  onClick={() => {
                    toggle();
                    setType("user");
                  }}
                >
                  <i className="fa icon-people fa-lg d-block font-5xl mb-2"></i>
                  Alterar usuário
                  <FormText className="help-block">
                    É necessário e-mail e senha válidos, para realizar está
                    operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={() => toggle()} className="modal-lg ">
        <ModalHeader toggle={() => toggle()}>
          {type === "password"
            ? "Alterar senha"
            : type === "email"
            ? "Alterar e-mail"
            : "Alterar usuário"}
        </ModalHeader>
        <ModalBody>
          <Form
            action=""
            onSubmit={handleSubmit}
            method="post"
            className="form-horizontal"
          >
            {type === "password" ? (
              <FormGroup row className="justify-content-center">
                <Col md="2">
                  <Label className="mt-2" htmlFor="hf-email">
                    <strong>E-mail</strong>
                  </Label>
                </Col>
                <Col xs="12" md="8">
                  <Input
                    type="email"
                    id="hf-email"
                    name="hf-email"
                    placeholder="Insira e-mail atual"
                    autoComplete="email"
                  />
                </Col>
                <FormText className="help-block">
                  Para trocar a senha, deve preencher com o e-mail atual!
                </FormText>
              </FormGroup>
            ) : type === "email" ? (
              <>
                <FormGroup row className="justify-content-center">
                  <Col md="2">
                    <Label className="mt-2" htmlFor="hf-email">
                      <strong>Novo e-mail</strong>
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="email"
                      id="hf-email"
                      name="hf-email"
                      placeholder="Insira seu novo e-mail"
                      autoComplete="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Col md="2">
                    <Label className="mt-2" htmlFor="hf-remail">
                      <strong> Repetir e-mail</strong>
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="email"
                      id="hf-remail"
                      name="hf-remail"
                      placeholder="Repetir e-mail"
                      autoComplete="remail"
                    />
                  </Col>
                </FormGroup>
              </>
            ) : (
              <>
                <FormGroup row className="justify-content-center">
                  <Col md="1">
                    <Label className="mt-2" htmlFor="hf-user">
                      <strong>Usuário</strong>
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="text"
                      id="hf-user"
                      name="hf-user"
                      placeholder="Nome de usuário"
                      autoComplete="user"
                    />
                  </Col>
                  <FormText className="help-block">
                    <strong>Para alterar seu usuário, lembre-se que:</strong>{" "}
                    <br />
                    Não deve ter palavras inapropriadas ou de baixo calão <br />
                    Deve ter apenas um espaço <br />
                    Deve ter entre 3 e 50 caracteres
                  </FormText>
                </FormGroup>
              </>
            )}

            <Button
              className="float-right d-flex align-items-center"
              onClick={toggle}
              size="sm"
              color="light"
            >
              <strong className="font-lg">Voltar</strong>
            </Button>
            <Button
              className="float-right d-flex align-items-center mr-2"
              type="submit"
              size="sm"
              color="success"
            >
              <i className="fa icon-like fa-lg mr-2"></i>
              <strong className="font-lg">Alterar</strong>
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Body>
  );
}
