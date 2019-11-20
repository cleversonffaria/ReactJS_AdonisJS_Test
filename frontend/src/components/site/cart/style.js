import styled from "styled-components";
export const Content = styled.div`
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 767px) {
    .price_cart {
      font-size: 1.4rem !important;
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 515px;
  word-wrap: break-word;
  background-color: #f0f0f0;
  background-clip: border-box;
  border-top: 1px solid #c8ced3;
  border-bottom: 1px solid #c8ced3;
  /* Header Cart*/
  .head_compra {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #353535;
  }
  /* Body Cart */
  .card-body {
    padding: 5px !important;
    overflow: hidden;
  }
  .card {
    border: 1px solid #e5e5e5;
    margin-bottom: 5px;
  }

  .list_cart .cart_col {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .list_cart .img_cart {
    width: 80px;
  }
  .list_cart .img_cart img {
    max-height: 100px;
  }
  .list_cart .cat_cart {
    color: #ff5f11;
    font-weight: bold;
    font-size: 15px;
  }
  .list_cart .product_cart {
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #202020;
  }
  .list_cart .price_cart {
    color: #202020;
    font-weight: bold;
    font-size: 18px;
    display: block;
  }

  .inputCard {
    width: 45px;
    height: 30px;
    text-align: center;
    padding: 0 !important;
    border: 1px solid #ccc;
    border-radius: 0;
  }
  .iconCard {
    padding: 5px;
    font-size: 0.7rem;
    border: 1px solid #ccc;
  }
  .iconCardPlus {
    border-left: none;
  }
  .iconCardMinus {
    border-right: none;
  }
  .stock_cart {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .close_cart {
    color: #f86c6b;
    font-size: 0.9rem;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
    position: absolute;
    right: 0%;
    top: 0;
    z-index: 1;
    background: 0;
    background-color: #0000;
  }
  .clear_cart {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: top;
  }
  .btn_clear_cart:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  .btn_clear_cart {
    color: #f86c6b;
    background: 0;
    font-size: 12px;
    position: relative;
    float: right;
    right: 0;
    padding: 4px 7px 9px 0;
    border: none;
  }
  .card_frete label {
    margin: 0;
  }
  .card_frete .card-body:hover {
    background: #f9ecdd;
    cursor: pointer;
  }
  .card_frete .check_frete input {
    /* visibility: hidden; */
  }
  .card_frete .check_frete i {
    position: absolute;
  }
  .card_frete .check_frete {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card_frete .prest_frete {
    color: #202020;
    font-weight: bold;
    font-size: 1rem;
  }
  .card_frete .time_frete {
    color: #202020;
    font-size: 0.8rem;
  }
  .card_frete .price_frete {
    font-weight: bold;
    color: #454545;
  }
  .card_frete .notcheck_frete {
    font-size: 1.3rem;
  }
  .card_frete .checked_frete {
    font-size: 1.4rem;
    /* display: none; */
  }

  /* Aside price */
  .calc_price {
    font-size: 0.9rem;
    color: #585858;
  }
  .calc_subtotal {
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
  }
  .calc_frete {
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
  }
  .calc_total {
    -moz-box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    background: #ffe8dd;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px;
  }
  .price {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .price i {
    font-size: 1.6rem;
    color: #585858;
  }
  .price_forward {
    margin-left: 10px;
    font-size: 0.8rem;
  }
  .price_sight {
    margin-left: 10px;
    font-size: 0.8rem;
  }
  .price_forward .value_pacel {
    font-size: 1.3rem !important;
    font-weight: bold;
    color: #ff6b24;
  }
  .price_sight .value {
    font-size: 1.3rem !important;
    font-weight: bold;
    color: #008c00;
  }

  /* Cart Endereco */
  .end_name {
    text-align: center;
  }
  .end_name {
    font-weight: bold;
    font-size: 22px;
    color: #ff7c3e;
  }
  .end_icon {
    font-size: 50px;
    margin: 0 auto;
  }
  .card-header {
    -moz-box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    box-shadow: inset 10px 0 30px rgb(0, 0, 0, 0.1);
    background: #ffe8dd;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    border-bottom: none !important;
  }

  .btn_cart:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    border: none !important;
    background: none !important;
    box-shadow: none !important;
    color: #202020 !important;
  }
  .btn_cart:hover {
    background: none;
    border: none;
  }
  .btn_cart {
    margin-top: 1rem;
    background: 0;
    font-size: 14px;
    padding: 4px 7px 9px 0;
    border: none;
  }
  .btn_red {
    color: #f86c6b;
  }
  .btn_blue {
    color: #20a8d8;
  }
  /* Fim Cart Endereco */

  /* Helper */
  .clearB {
    clear: both;
  }
`;
