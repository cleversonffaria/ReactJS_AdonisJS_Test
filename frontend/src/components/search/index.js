/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import {
  Body,
  Menu_ul,
  Categorias,
  ListaCategoria,
  SubCategoria
} from "./style";
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
          <Menu_ul arrowPosition="80px">
            <li className="p-2">
              Categoria &nbsp;<i className="fa fa-angle-down fa-lg"></i>
              <Categorias className="uliCategoria">
                <span className="arrow"></span>
                <div className="borderBottom">
                  <ListaCategoria>
                    <i className="fa fa-mixcloud fa-lg"></i>
                    <Link className="ml-3" to="/wireless">
                      Kmasu 
                    </Link>
                    <SubCategoria className="listaSubCategoria">
                      <span className="arrow"></span>
                      <li>
                        <Link to="/categoria">Acessorios</Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          AntenasAcessoriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasad asdasdassssssssssdasdasdas sadasdasdasddas as aas sd
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          Modulasd 
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">Roteador</Link>
                      </li>
                    </SubCategoria>
                  </ListaCategoria>
                </div>
                <div className="borderBottom">
                  <ListaCategoria>
                    <i className="fa fa-archive fa-lg"></i>
                    <Link className="ml-3" to="/wireless">
                      Nico house musture
                    </Link>
                    <SubCategoria className="listaSubCategoria">
                      <span className="arrow"></span>
                      <li>
                        <Link to="/categoria">Acessorios</Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          AntenasA
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          Modulasd asd asdd asd sa adasd
                          asdasdao
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">Roteador</Link>
                      </li>
                    </SubCategoria>
                  </ListaCategoria>
                </div>
                <div className="borderBottom">
                  <ListaCategoria>
                    <i className="fa fa-clone fa-lg"></i>
                    <Link className="ml-3" to="/wireless">
                      Gororoba
                    </Link>
                    <SubCategoria className="listaSubCategoria">
                      <span className="arrow"></span>
                      <li>
                        <Link to="/categoria">Acessorios</Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          AntenasAcessori asda
                          sdasasadasdasdasd
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          Modulasd asd asdas daasdsdaasdo
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">Roteador</Link>
                      </li>
                    </SubCategoria>
                  </ListaCategoria>
                </div>
                <div className="borderBottom">
                  <ListaCategoria>
                    <i className="fa fa-heart fa-lg"></i>
                    <Link className="ml-3" to="/wireless">
                      Wireless
                    </Link>
                    <SubCategoria className="listaSubCategoria">
                      <span className="arrow"></span>
                      <li>
                        <Link to="/categoria">Acessorios</Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          AntenasAcessori sdasdadasd
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">
                          Modulasdobaasdo
                        </Link>
                      </li>
                      <li>
                        <Link to="/categoria">Roteador</Link>
                      </li>
                    </SubCategoria>
                  </ListaCategoria>
                </div>
              </Categorias>
            </li>
          </Menu_ul>
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
