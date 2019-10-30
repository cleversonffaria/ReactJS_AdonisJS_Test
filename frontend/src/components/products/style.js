import styled from "styled-components";
export const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900|Roboto+Condensed:300,400,700&display=swap");
  font-family: "Roboto Condensed", sans-serif;
  text-align: center; 
  @media screen and (max-width: 600px) {
    .cardInfor {
      font-size: 18px !important;
    }
  }
  .productCard {
    margin:10px auto;
    width: 300px;
  }
  .cardGroud {
    background-color: #ff641a;
    bottom: 4px;
    content: "";
    left: 4px;
    position: absolute;
    top: 4px;
    width: 4px;
  }
  .cardInfor {
    font-size: 22px;
  }
  .cardProduct:hover {
    border: 1px solid #ff641a;
    cursor: pointer;
  }
  .card-body {
    border: 1px solid #c8ced3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .card-body img {
    display: block;
    margin: auto;
  }
  .card-body .title {
    background: none;
    margin-top: 10px;
    color: #ff641a;
    font-size: 18px;
    font-weight: 500;
  }
  .card-body .price_ofert {
    display: block;
    color: #ff5151;
    font-size: 12px;
    font-weight: 500;
    text-decoration: line-through;
  }
  .card-body .price {
    display: block;
    color: #202020;
    font-size: 20px;
    font-weight: bold;
  }
  .card-body .price_credit {
    display: block;
    color: #ff641a;
    font-weight: 500;
  }
  .card-footer {
    border-top: none !important;
    border: 1px solid #c8ced3;
    display: flex;
    justify-content: center;
  }
  .card-footer button {
    margin: 0 5px;
  }
  .card-footer button i {
    margin-right: 5px;
  }
  .card {
    overflow: hidden;
    border: none;
  }
`;
export const Title = styled.mark`
  background: none;
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
`;
