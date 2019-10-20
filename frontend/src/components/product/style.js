import styled from "styled-components";
export const Cont = styled.nav` 
  nav a {
    color: black !important;
  }
  /* ==== menu retrátil madlyluv.com ==== */
.menu_mluv_retratil {width: 100%; height: 65px; display: block; background: #f69797; position: fixed; top: -65px; z-index: 100;  -webkit-transition:All 0.5s ease; -moz-transition:All 0.5s ease; -o-transition:All 0.5s ease;}
.menu_mluv_retratil.mostrar {top: 0; position: fixed;}
.menu_mluv_retratil nav {margin: 0 20px; padding: 0; list-style: none; float: left;}
.menu_mluv_retratil nav a {line-height: 65px; color: #fff; text-transform: uppercase; padding: 0 10px; text-decoration: none;}
.menu_mluv_retratil nav a:hover {color: #E26767}
`;
