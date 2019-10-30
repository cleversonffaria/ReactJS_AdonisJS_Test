import React from "react";
import {
  ModalHeader,
  ModalBody,
  Modal,
  Row,
  Col,
  Button,
  FormGroup,
  Form,
  Label,
  Input
} from "reactstrap";
// import { Container } from './styles';

export default function modal({ title, modal, setmodal }) {
  const toggle = () => {
    setmodal(!modal);
  };
  const handleSubmit = event => {
    event.preventDefault();
    alert("enviei");
  };
  return (
    <Modal isOpen={modal} toggle={() => toggle()} className="modal-lg ">
      <ModalHeader toggle={() => toggle()}>{title && title.title}</ModalHeader>
      <ModalBody>
        <Form
          action=""
          method="post"
          encType="multipart/form-data"
          className="form-horizontal"
          onSubmit={handleSubmit}
        >
          <Row>
            {title &&
              Object.entries(title.info).map(dado => (
                <React.Fragment>
                  {dado[0] !== "Sexo" && dado[0] !== "Nascimento" ? (
                    <Col xs="6">
                      <FormGroup row className="align-items-center">
                        <Col md="3">
                          <Label
                            style={{ color: "#525252" }}
                            className="font-weight-bold"
                            htmlFor={"text-" + dado[0]}
                          >
                            {dado[0]}:
                          </Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="text"
                            id={"text-" + dado[0]}
                            name={dado[0]}
                            placeholder={dado[1]}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  ) : dado[0] === "Sexo" ? (
                    <Col xs="6">
                      {console.log("SEXO")}
                      <FormGroup row className="align-items-center">
                        <Col md="3">
                          <Label
                            style={{ color: "#525252" }}
                            className="font-weight-bold"
                            htmlFor="select"
                          >
                            {dado[0]}:
                          </Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="select" name="select" id="select">
                            <option value="0">Selecione o gênero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outros">Outros</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  ) : (
                    <Col xs="6">
                      {console.log("NASCIMENTO")}
                      <FormGroup row className="align-items-center">
                        <Col md="3">
                          <Label
                            style={{ color: "#525252" }}
                            className="font-weight-bold"
                            htmlFor="date-input"
                          >
                            {dado[0]}:{" "}
                          </Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="date"
                            id="date-input"
                            name="date-input"
                            placeholder="date"
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  )}
                </React.Fragment>
              ))}
          </Row>
          <Button
            className="float-right"
            color="secondary"
            onClick={() => toggle()}
          >
            Cancel
          </Button>
          <Button className="float-right mr-3" type="submit" color="success">
            Editar
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
