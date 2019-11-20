import styled from "styled-components";
export const Body = styled.div`
  .loading {
    top: 0;
  }
  .fa-spin {
    -webkit-animation: fa-spin 7s infinite linear;
    animation: fa-spin 7s infinite linear;
  }
  @media screen and (max-width: 600px) {
    .colunaInfo {
      padding: 0;
    }
  }
  @media screen and (max-width: 992px) {
    .menuAccount {
      display: none;
    }
  }
  @media screen and (max-width: 1229px) and (min-width: 994px) {
    .colunaInfo {
      flex: 0 0 68.6%;
      max-width: 68.6%;
    }
  }
  .menuAccount {
    font-weight: 600;
    min-width: 300px;
    max-width: 300px;
  }
  .menuAccount .card-body {
    padding: 20px 0 20px 0;
  }
`;
export const Imagem = styled.img`
  border-radius: 5px;
  width: 80px;
  box-shadow: 2px 2px 5px 1px rgb(0, 0, 0, 0.2);
`;
export const MenuAccout = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  .perfilAccount {
    text-align: center;
  }
  .perfilAccount > p {
    margin-top: 16px;
    font-size: 17px;
  }
  a {
    color: #202020;
    text-decoration: none;
  }
  .active {
    background: #ffe3d7;
    color: #ff5706;
  }
  .active:hover {
    background: #ffe3d7;
    color: #ff5706;
  }
  li:hover {
    color: #202020;
    background: #dfdfdf;
  }
  li {
    color: #202020;
    border-radius: 0 20px 20px 0;
    padding: 7px 10px 7px 40px;
    margin: 10px 20px 0 0;
  }
`;
