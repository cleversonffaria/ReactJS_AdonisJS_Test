import styled from "styled-components";
export const Img = styled.img`
  width: 150px;
`;
export const ContainerMenu = styled.div`
  @media screen and (max-width: 991px) {
    .search {
      margin: -15px 0;
    }
  }
  /* Configuração do menu depois do Scroll */
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
  font-family: "Poppins", sans-serif;
  margin-top: 31px;
  .search {
    margin: 8px 0;
  }
  .content {
    margin-top: 10px;
  }
  /* Fim | Configuração do menu depois do Scroll */
`;
export const Contact_Cart = styled.div`
  display: grid;
  grid-template:
    "icone texts arrow" 30px
    "icone info arrow" 30px
    / 30px 130px 15px;
  .baseIcon {
    font-size: 25px;
    margin: 12px 0 0 3px;
    grid-area: icone;
  }
  .baseText {
    margin-top: 5px;
    font-size: 19px;
    font-weight: 500;
    grid-area: texts;
  }
  .baseArrow {
    margin: 15px 0 0 -35px;
    grid-area: arrow;
  }
  .baseInfo {
    margin: -3px -15px 0 0;
    color: #ff641a;
    font-weight: 500;
    font-size: 11px;
    grid-area: info;
  }
  /* background-color: red; */
`;
export const ContainerContatos = styled.ul`
  cursor: pointer;
  list-style: none;
  padding: 0;

  /* Seta para tooltip */
  .arrow {
    top: calc((0.5rem + 1px) * -1);
    left: ${props => props.arrowPosition || "0px"};
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem;
  }
  .arrow::after,
  .arrow::before {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }
  .arrow::before {
    top: 0;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: rgb(0, 0, 0, 0.5);
  }
  .arrow::after {
    top: 1px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #fff;
  }
  /*Fim Seta */
  li:hover .subContato {
    visibility: visible;
    opacity: 1;
  }
  .subContato > li {
    width: 315px;
    padding: 5px;
    font-size: 0.82rem;
  }
  .subContato > li > i {
    margin-right: 20px;
    margin-left: 10px;
    font-size: 20px;
    color: #ff641a;
  }
  .subContato a {
    color: #202020;
    text-decoration:none;
  }
  .subContato a:hover {
    color: #ff641a;
    text-decoration:none;
  }
  .subContato {
    cursor: auto;
    background: #f0f0f0;
    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    list-style: none;
    padding: 10px;
    display: table;
    will-change: transform;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate3d(-20px, 60px, 0px);
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;
  }
  .infoCart {
    font-size: 0.82rem;
    display: table;
  }
  .infoProdutoCart {
    background: none;
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .infoTrash i:hover {
    color: tomato;
    cursor: pointer;
  }
  strong {
    font-size: 14px;
  }
`;
export const MenuNotFixed = styled.nav`
  .btnMenuMobile {
    display: inline-block;
    width: 1.8em;
    height: 1.8em;
    padding: 0;
    border: none !important;
    box-shadow: none !important;
    background: no-repeat center center;
    background-size: 100% 100%;
    span {
      display: none;
    }
  }
  .btnMenuMobile::before {
    margin: -10px;
  }
  .menuNotFixed {
    -webkit-font-smoothing: antialiased;
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
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
  @media screen and (max-width: 1175px) {
    .col_img {
      display: none;
    }
    .col_search {
      margin-left: 50px !important;
    }
    .col_infor {
      flex: none;
      max-width: 50%;
      margin: 0 auto;
    }
  }
  .menuFixed {
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
    font-family: "Poppins", sans-serif;
    /* Fixa o menu no top fazendo ele desaparecer */
    position: fixed;
    z-index: 101;
    top: -80px;
    visibility: hidden;
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
  }
  .menuFixed.mostraMenu {
    top: 0px;
    visibility: visible;
  }
  .menuFixed.escondeMenu {
    display: none;
  }
`;

export const MenuStart = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
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
  @media screen and (max-width: 991px) {
    display: none;
  }
  mark {
    background: none;
  }
  color: #202020;
  text-align: center;
  .search_menu {
    margin-top: 20px !important;
    margin: auto;
  }
  .escondeCat {
    display: none;
  }
  .contact {
    margin-top: 5px;
  }
`;
export const MenuEnd = styled.div`
  @media screen and (max-width: 991px) {
    grid-template-columns: ${props => props.gridColum || "auto"};
    .minhaconta a {
      float: right;
      margin-right: 30px;
    }
    .register,
    .login {
      display: none;
    }
  }
  margin: 5px;
  color: #202020;
  text-align: left;
  display: grid;
  grid-template-columns: ${props => props.gridColum || "1fr 1fr 1fr"};
  .register {
    text-align: right;
  }
  span {
    margin: 0 5px;
    color: black;
  }
  a {
    text-decoration: none;
    color: #202020;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: #ff641a;
  }
  a i {
    margin-right: 5px;
    color: #202020;
  }
`;
// Menu Tablete
export const ModoDesktop = styled.span`
  display: block;
  @media screen and (max-width: 991px) {
    /* Troca para modo Tablet */
    display: none;
  }
`;
export const ModoTablet = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
