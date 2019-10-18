import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Menu, Localization, Contact, LoginUser } from "./style";

export default function Header() {
  useEffect(() => {
    // console.log(document.documentElement.scrollTop);
  });
  return (
    <React.Fragment>
      <Menu>
        <Localization>
          <div className="icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="estado">Espirito Santo</div>
          <div className="cidade">Apiáca</div>
        </Localization>
        <Contact>
          <div className="contact">
            <mark>22-997349644</mark> | <mark> cleversonffaria@gmail.com</mark>
          </div>
        </Contact>
        <LoginUser>
          <Link to="admin">
            <i className="fa fa-user-circle-o fa-lg"></i>
            Minha Conta
          </Link>
          <Link to="register" className="register">
            <i className="fa fa-user-plus fa-lg"></i>
            Registrar
          </Link>
          <Link to="login">
            <span>|</span>
            <i className="fa fa-lock fa-lg"></i>
            Login
          </Link>
        </LoginUser>
      </Menu>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
