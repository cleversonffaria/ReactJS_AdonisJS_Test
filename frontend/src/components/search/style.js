import styled from "styled-components";
export const Body = styled.body`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,400,600&display=swap");
  font-family: "Poppins", sans-serif;
  background: none;
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
  background: #fff !important;
  border-right: none !important;
  height: 35px;
  list-style: none;
  padding: 7px;
  border: 1px solid #d6d6d6;
  cursor: pointer;

  :hover .listaCategoria {
    display: block;
    background: #ff7c3e;
    color: #fff;
    padding: 10px;
  }
  .listaCategoria li:hover .listaSubCategoria {
    display: block;
    background: #ff7c3e;
    color: #fff;
    padding: 10px;
  }
  :hover {
    background: #ff7c3e !important;
    border: 0.5px solid #ff7c3e;
    color: #fff;
  }
`;
export const ListaCategoria = styled.ul`
  padding: 0;
  color: black;
  list-style: none;
  display: none;
  position: absolute;
  margin-left: -8px;
  margin-top: 5px;
`;
export const ListaSubCategoria = styled.ul`
  padding: 0;
  color: black;
  list-style: none;
  display: none;
  position: absolute;
  margin-left: 85%;
  margin-top: -50%;
`;
