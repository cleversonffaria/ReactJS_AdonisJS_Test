import styled from "styled-components";

export const Body = styled.div`
  .loading {
    top: 200px;
  }
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans:700|Open+Sans:400,600,700,800&display=swap&subset=cyrillic");
  font-family: "Open Sans", "Noto Sans", sans-serif;
  @media (min-width: 992px) {
    .main,
    .app-footer {
      margin-left: 0px !important;
    }
  }
  .btn_cart {
    color: #fff;
    margin-left: 10px;
    background: #ff8b53;
    border: 1px solid #ff8b53;
  }
  .btn_cart:hover {
    background: none;
    background: #ff6b24;
    border: 1px solid #ff6b24;
  }
  .btn_cart:focus {
    background: #ff6b24 !important;
    border:none;
    box-shadow: 0px 0px 0px 3px  #ffc1a4 !important;
    color: #fff !important;
  }
`;
