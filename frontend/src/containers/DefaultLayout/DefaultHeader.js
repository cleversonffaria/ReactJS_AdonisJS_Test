import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/paginaprincipal" className="nav-link" >Painel de controle</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/usuario" className="nav-link">Usuários</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Configurações</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="imagem" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Conta</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Atualizações<Badge color="info">2</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Mensagens<Badge color="success">3</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tarefas<Badge color="danger">6</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comentários<Badge color="warning">4</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Configurações</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Perfil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Configurações</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Pagamentos<Badge color="secondary">2</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projetos<Badge color="primary">1</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
