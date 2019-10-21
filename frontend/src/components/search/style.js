import styled from "styled-components";
export const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
  font-family: "Poppins", sans-serif;
  background: none;
  a {
    text-decoration: none;
    color: #fff;
    padding: auto;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: #141414;
  }
  a i {
    margin-right: 5px;
    color: #202020;
  }
  button {
    background: #fff !important;
    border: 0.5px solid #d6d6d6;
    height: 35px;
  }
  button:hover {
    background: #ff7c3e !important;
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
`;
export const UL = styled.ul`
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
  li {
    height: 45px;
  }
  :hover .uliCategoria {
    display: block;
  }
  .uliCategoria li:hover .listaSubCategoria {
    display: block;
  }
  :hover {
    background: #ff7c3e !important;
    border: 0.5px solid #ff7c3e;
    color: #fff;
  }
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
    top: 48px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #ff7c3e;
  }
  .arrow::after {
    top: 48px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #ff7c3e;
  }
  /*Fim Seta */
`;
export const UliCategoria = styled.ul`
  list-style: none;
  display: none;
  margin-left: -7px;
  margin-top: 15px;
  padding: 10px;
  background: #ff7c3e;
  color: #fff;
  width: 200px;
  .listCategoria {
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #fff;
  }
  .listCategoria .gapArrow {
    position: absolute;
    width: 111%;
    height: 100%;
  }
  .listCategoria:last-child {
    border-bottom: none;
  }
`;
export const ListaSubCategoria = styled.ul`
  color: black;
  text-align: left;
  list-style: none;
  padding: 10px;
  display: none;
  top: 0;
  left: 200px;
  position: absolute;
  background: #ff7c3e;
  color: #fff;
  .paa {
    background: red;
    width: 500px;
  }
  li {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #fff;
  }
  li:last-child {
    border-bottom: none;
  }

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
    left: -13px;
    top: 30px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #ff7c3e;
  }
  .arrow::after {
    left: -13px;
    top: 30px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #ff7c3e;
  }
  /*Fim Seta */
`;
