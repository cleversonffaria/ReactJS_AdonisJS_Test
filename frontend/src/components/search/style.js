import styled from "styled-components";
export const Body = styled.div`
  @media screen and (max-width: 499px) {
    input {
      border-radius: 5px 0 0 5px !important;
    }
  }
  /* Atribuido para todo Search */
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
  font-family: "Poppins", sans-serif;
  background: none;
  /* Fim | Atribuido para todo Header */
  /* Todos Links do Header */
  a {
    text-decoration: none;
    color: #fff;
    overflow: hidden;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: #202020 !important;
    font-weight: 500;
  }
  a i {
    margin-right: 5px;
    color: #202020;
  }
  /* Fim | Todos Links do Header */
  /* Botoes e Inputs */
  button {
    background: #ff7c3e !important;
    border: 0.5px solid #ff7c3e;
    color: #fff;
    height: 35px;
  }
  button:hover {
    background: #ff5f11 !important;
    border: 0.5px solid #ff7c3e;
    color: #fff;
  }
  input {
    border: 1px solid #d6d6d6;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #d6d6d6;
    outline: 0;
  }
  /* Fim | Botoes e Inputs */
`;
export const Menu_ul = styled.ul`
  @media screen and (max-width: 991px) {
    display: none;
  }
  /* Configurações do Menu UL */
  z-index: 100;
  background: #fff !important;
  border-right: none !important;
  height: 35px;
  list-style: none;
  padding: 0;
  border: 1px solid #d6d6d6;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  width: 108px;
  /* Fim | Configurações do Menu UL */
  /* Passar Mouse Menu UL */
  :hover .uliCategoria {
    opacity: 1;
    visibility: visible;
  }
  :hover {
    background: #ff7c3e !important;
    border: 0.5px solid #ff7c3e;
    color: #fff;
  }
  /* Fim | Passar Mouse Menu UL */
  li {
    text-align: left;
    height: 45px;
  }
  .uliCategoria li:hover .listaSubCategoria {
    visibility: visible;
    opacity: 1;
  }
  /* Fim | Passar Mouse Menu UL */
  /* Seta para o tooltip Menu */
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
    top: 48px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #ff7c3e;
  }
  .arrow::after {
    top: 48px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #ff7c3e;
  }
  /* Fim | Seta para o tooltip Menu */
`;
export const Categorias = styled.ul`
  /* Configurações das categorias */
  -webkit-transition: opacity 0.3s ease-in-out;
  -moz-transition: opacity 0.3s ease-in-out;
  -ms-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
  list-style: none;
  background: rgb(255, 124, 62);
  color: #fff;
  width: 250px;
  margin-left: -7px;
  margin-top: 15px;
  padding: 0 10px;
  /* Fim | Configurações das categorias */
  .borderBottom {
    border-bottom: 1px solid #fff;
  }
  .borderBottom:last-child {
    border-bottom: none;
  }
`;
export const ListaCategoria = styled.li`
  /* Configurações das Lista de categorias */
  display: -webkit-flex;
  display: table;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  width: 250px;
  padding: 10px;
  height: auto;
  /* Fim | Configurações das categorias */
  .gapArrow {
    position: absolute;
    width: 111%;
    height: 100%;
  }
`;
export const SubCategoria = styled.ul`
  /* Configurações das Subcategorias */
  display: table;
  -webkit-transition: opacity 0.3s ease-in-out;
  -moz-transition: opacity 0.3s ease-in-out;
  -ms-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  top: 0;
  left: 250px;
  position: absolute;
  text-align: left;
  max-width: 200px;
  padding: 0 10px;
  list-style: none;
  background: #ff7c3e;
  color: #fff;
  /* Fim | Configurações das categorias */
  li {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 5px;
    height: auto;
    width: auto;
  }
  li a {
    overflow: visible;
  }
  /* a última Li não recebe borda */
  li:last-child {
    border-bottom: none;
  }
  /* Seta para o tooltip Menu */
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
    left: -13px;
    top: 27px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #ff7c3e;
  }
  .arrow::after {
    left: -13px;
    top: 27px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #ff7c3e;
  }
  /*Fim | Seta para o tooltip Menu */
`;
