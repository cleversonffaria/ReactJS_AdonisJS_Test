import styled from "styled-components";
export const Img = styled.img`
  width: 150px;
`;
export const ContainerMenu = styled.div`
  margin-top: 30px;
  .search {
    margin: 8px 0;
  }
`;

export const MenuNotFixed = styled.nav`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
  .menuNotFixed {
    font-family: "Poppins", sans-serif;
    /* Fixa o menu no top fazendo ele desaparecer */
    position: fixed;
    z-index: 101;
    top: 0px;
    transition: All 0.5s ease;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    /* Fim  */
    width: 100%;
    margin: 0 auto;
    color: #202020;
    background-color: #fff;
    /* Adiciona bordas e shadow */
    box-shadow: 1px -10px 30px 1px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    /* Fim */
    display: grid;
    grid-template:
      "locals contato-search user" 30px
      / auto 2fr auto;
  }
  .menuNotFixed.escondeMenu {
    top: -65px;
  }
`;

export const MenuFixed = styled(MenuNotFixed)`
  .menuFixed {
    font-family: "Poppins", sans-serif;
    /* Fixa o menu no top fazendo ele desaparecer */
    position: fixed;
    z-index: 101;
    top: -80px;
    transition: All 0.5s ease;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    /* Fim  */
    width: 100%;
    height: 80px;
    margin: 0 auto;
    color: #202020;
    background-color: #fff;
    /* Adiciona bordas e shadow */
    box-shadow: 1px -10px 30px 1px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    /* Fim */
    display: grid;
    grid-template:
      "locals contato-search user" 30px
      / 0.5fr 2fr auto;
  }
  .menuFixed.mostraMenu {
    top: 0px;
  }
`;

export const MenuStart = styled.div`
  color: #202020;
  grid-area: locals;
  display: grid;
  grid-template:
    "icons estado" 14px
    "icons cidade" 14px
    / 30px auto;
  .icon i {
    text-align: right;
    font-size: 25px;
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
  img {
    margin-top: 15px !important;
    margin-left: 40px;
  }
`;
export const MenuMiddle = styled.div`
  mark {
    background: none;
  }
  color: #202020;
  text-align: center;
  grid-area: contato-search;
  .search_menu {
    margin-top: 20px !important;
    width: 70%;
    margin: auto;
  }
`;
export const MenuEnd = styled.div`
  margin: 5px;
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
