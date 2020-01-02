import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
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
      <AppNavbarBrand
        full={{ src: logo, width: 89, height: 25, alt: "Painel site logo" }}
        minimized={{
          src: sygnet,
          width: 30,
          height: 30,
          alt: "Painel site logo"
        }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none">
          <NavLink to="#" className="nav-link">
            <i className="icon-bell"></i>
            <Badge pill color="danger">
              5
            </Badge>
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            {data && titleize(data.username)}
            <img
              src={"../../assets/img/avatars/6.jpg"}
              className="img-avatar"
              alt="alt da imagem"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Gerenciamento</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-user"></i> Perfil
            </DropdownItem>
            <DropdownItem>
              <i className="icons-v-card"></i> Colaboradores
            </DropdownItem>
            <DropdownItem>
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
