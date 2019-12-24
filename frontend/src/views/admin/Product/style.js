import styled from "styled-components";

export const Container = styled.div`
  .cart_info {
    font-weight: bold;
    font-size: 25px;
    color: #3b3b3b;
    text-align: center;
  }
  .cart_title {
    font-weight: bold;
    font-size: 16px;
    color: #3b3b3b;
    text-align: center;
  }
  .description {
    width: 100%;
    min-height: 50px;
    max-height: 150px;
  }
  .img .MuiOutlinedInput-notchedOutline {
    border: none;
    margin: 0;
  }

  /* Esconde o input */
  input[type="file"] {
    display: none;
  }

  /* Aparência que terá o seletor de arquivo */
  .select_img {
    background-color: #ff8c55;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
  }
`;
export const InfoCard = styled.div`
  .title_info {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    color: #646464;
  }
`;
