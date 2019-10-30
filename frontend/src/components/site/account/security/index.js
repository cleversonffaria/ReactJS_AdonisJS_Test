import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
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
              <Card>
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
                    É necessário o email válido para realizar está operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card>
                <CardBody
                  className="cursor-pointer"
                  onClick={() => {
                    toggle();
                    setType("email");
                  }}
                >
                  <i className="fa icon-envelope-open fa-lg d-block font-5xl mb-2"></i>
                  Alterar Email
                  <FormText className="help-block">
                    É necessário usuário e senha válidos para realizar está
                    operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="4" className="d-flex">
              <Card>
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
                    É necessário email e senha válidos para realizar está
                    operação!
                  </FormText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={() => toggle()} className="modal-lg ">
        <ModalHeader toggle={() => toggle()}>Titulo da modal</ModalHeader>
        <ModalBody>
          <Form
            action=""
            onSubmit={handleSubmit}
            method="post"
            className="form-horizontal"
          >
            {type === "password" ? (
              <FormGroup row className="justify-content-center">
                <Col md="1">
                  <Label className="mt-2" htmlFor="hf-email">
                    Email
                  </Label>
                </Col>
                <Col xs="12" md="8">
                  <Input
                    type="email"
                    id="hf-email"
                    name="hf-email"
                    placeholder="Insira Email atual"
                    autoComplete="email"
                  />
                </Col>
                <FormText className="help-block">
                  Para trocar a senha, deve preencher com o email atual!
                </FormText>
              </FormGroup>
            ) : type === "email" ? (
              <>
                <FormGroup row className="justify-content-center">
                  <Col md="1">
                    <Label className="mt-2" htmlFor="hf-user">
                      Usuário
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="text"
                      id="hf-user"
                      name="hf-user"
                      placeholder="Insira usuário atual"
                      autoComplete="user"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Col md="1">
                    <Label className="mt-2" htmlFor="hf-password">
                      Senha
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="password"
                      id="hf-password"
                      name="hf-password"
                      placeholder="Insira senha atual"
                      autoComplete="password"
                    />
                  </Col>
                  <FormText className="help-block">
                    Para trocar a email, deve preencher o usuário e senha atual!
                  </FormText>
                </FormGroup>
              </>
            ) : (
              <>
                <FormGroup row className="justify-content-center">
                  <Col md="1">
                    <Label className="mt-2" htmlFor="hf-email">
                      Email
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="email"
                      id="hf-email"
                      name="hf-email"
                      placeholder="Insira Email atual"
                      autoComplete="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Col md="1">
                    <Label className="mt-2" htmlFor="hf-password">
                      Senha
                    </Label>
                  </Col>
                  <Col xs="12" md="8">
                    <Input
                      type="password"
                      id="hf-password"
                      name="hf-password"
                      placeholder="Insira senha atual"
                      autoComplete="password"
                    />
                  </Col>
                  <FormText className="help-block">
                    Para trocar o usuário, deve preencher o email e senha atual!
                  </FormText>
                </FormGroup>
              </>
            )}

            <Button
              className="float-right d-flex align-items-center"
              type="submit"
              size="sm"
              color="success"
            >
              <i className="fa icon-like fa-lg mr-2"></i> 
              <strong className="font-lg">Enviar</strong>
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Body>
  );
}
