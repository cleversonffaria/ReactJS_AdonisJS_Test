import React, { useState } from "react";
import { Body, UL, ListaCategoria, ListaSubCategoria } from "./style";
import {
  Col,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

// import { Container } from './styles';

export default function Search(props) {
  const [first, setfirst] = useState();
  return (
    <Body>
      <FormGroup row>
        <Col md="12">
          <InputGroup>
            <UL>
              <li>
                Categoria &nbsp;<i className="fa fa-angle-down fa-lg"></i>
                <ListaCategoria className="listaCategoria">
                  <li>
                    Wireless asdasd asd
                    <ListaSubCategoria className="listaSubCategoria">
                      <li>Acessorios</li>
                      <li>Antenas</li>
                      <li>Modulos</li>
                      <li>Roteador</li>
                    </ListaSubCategoria>
                  </li>
                  <li>
                    Wireless
                    <ListaSubCategoria className="listaSubCategoria">
                      <li>Acessorios</li>
                      <li>Antenas</li>
                      <li>Modulos</li>
                      <li>Roteador</li>
                    </ListaSubCategoria>
                  </li>
                </ListaCategoria>
              </li>
            </UL>
            <Input id="appendedInputButton" type="text" />
            <InputGroupAddon addonType="append">
              <Button>
                <i className="fa fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
    </Body>
  );
}
