import React, { useEffect, useState } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav
} from "reactstrap";
import PropTypes from "prop-types";

import api from "../../services/api";
import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

function DefaultHeader({ ...props }) {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  // eslint-disable-next-line
  const { children, ...attributes } = props;
  useEffect(() => {
    const data = async () => {
      await api
        .get("user")
        .then(response => setData(response.data))
        .catch(e => setMessage(e.response.data.message));
    };
    data();
  }, []);

  function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
      var w = words[a];
      words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
  }

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            {(message && "Sem usuário") || (data && titleize(data.username))}
            <img
              src={"../../assets/img/avatars/perfil.jpg"}
              className="img-avatar"
              alt="alt da imagem"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Gerenciamento</strong>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                alert("ABRIR MODAL EDITAR PERFIL");
              }}
            >
              <i className="fa fa-user"></i> Perfil
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                props.history.push("/admin/contributors");
              }}
            >
              <i className="icons-v-card"></i> Colaboradores
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                props.history.push("/admin/registers");
              }}
            >
              <i className="icons-user-plus"></i> Cadastrar
            </DropdownItem>
            <DropdownItem onClick={e => props.onLogout(e)}>
              <i className="fa fa-lock"></i> Sair
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
