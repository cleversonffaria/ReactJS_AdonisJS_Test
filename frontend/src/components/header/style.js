import styled from "styled-components";
export const Menu = styled.nav`
  @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
  mark {
    background: none;
  }
  position: fixed;
  width: 100%;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  color: #202020;
  background-color: #fff;

  box-shadow: 1px -10px 30px 1px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template:
    "locals contato user"
    / auto 2fr auto;
`;

export const Localization = styled.div`
  color: #202020;

  grid-area: locals;
  display: grid;
  grid-template:
    "icons estado" 20px
    "icons cidade" 20px
    / 30px auto;
  .icon i {
    text-align: right;
    font-size: 35px;
    margin: 2.5px 5px;
    grid-area: icons;
  }
  .estado {
    font-size: 15px !important;
    grid-area: estado;
  }
  .cidade {
    font-size: 12px !important;
    text-align: right;
    grid-area: cidade;
  }
`;
export const Contact = styled.div`
  margin-top: 10px;
  color: #202020;
  text-align: center;
  grid-area: contato;
`;
export const LoginUser = styled.div`
  margin: 10px;
  color: #202020;
  text-align: left;

  grid-area: user;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .register {
    text-align: right;
  }
  span {
    margin: 0 5px;
  }
  a {
    color: #202020;
  }
  a i {
    margin-right: 5px;
  }
`;
