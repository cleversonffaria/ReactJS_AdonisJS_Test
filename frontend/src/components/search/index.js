import React from "react";
import { Link } from "react-router-dom";
import { Body, UL, UliCategoria, ListaSubCategoria } from "./style";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

// import { Container } from './styles';

export default function Search(props) {
  return (
    <Body>
      <FormGroup>
        <InputGroup>
          <UL arrowPosition="77px">
            <li className="p-2">
              Categoria &nbsp;<i className="fa fa-angle-down fa-lg"></i>
              <UliCategoria className="uliCategoria">
                <span className="arrow"></span>
                <li className="listCategoria">
                  Wireless Oltsad asd asdas
                  <span className="gapArrow"> </span>
                  <ListaSubCategoria className="listaSubCategoria">
                    <span className="arrow"></span>
                    <li>
                      <Link to="/categoria">Acessorios</Link>
                    </li>
                    <li>
                      <Link to="/categoria">AntenasAcessorisd</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Modulo</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Roteador</Link>
                    </li>
                  </ListaSubCategoria>
                </li>
                <li className="listCategoria">
                  Wirel as
                  <span className="gapArrow"> </span>
                  <ListaSubCategoria className="listaSubCategoria">
                    <span className="arrow"></span>
                    <li>
                      <Link to="/categoria">Acessorios asdasd</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Antenas asda sdasasdddasd</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Modulo</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Roteador</Link>
                    </li>
                  </ListaSubCategoria>
                </li>
                <li className="listCategoria">
                  Wirel as
                  <span className="gapArrow"> </span>
                  <ListaSubCategoria className="listaSubCategoria">
                    <span className="arrow"></span>
                    <li>
                      <Link to="/categoria">Acessorios asdasd</Link>
                    </li>
                    <li>
                      <Link to="/categoria">
                        Antenasasdasdasasddasdasdasdasd
                      </Link>
                    </li>
                    <li>
                      <Link to="/categoria">Modulo</Link>
                    </li>
                    <li>
                      <Link to="/categoria">Roteador</Link>
                    </li>
                  </ListaSubCategoria>
                </li>
              </UliCategoria>
            </li>
          </UL>
          <Input id="appendedInputButton" type="text" />
          <InputGroupAddon addonType="append">
            <Button>
              <i className="fa fa-search"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Body>
  );
}
