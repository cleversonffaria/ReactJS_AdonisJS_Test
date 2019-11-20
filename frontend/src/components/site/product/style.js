import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-top: 1px solid #c8ced3;
  border-bottom: 1px solid #c8ced3;
  .tab-pane {
    text-align: left;
  }
  .lastinf1 {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
  .inf1 i {
    margin-right: 10px;
    color: #ff6a22;
  }
  .inf2 i {
    margin-right: 10px;
    color: #ff6a22;
  }
  .inf1 {
    color: #161616;
    border-top: 1px solid rgb(0, 0, 0, 0.2);
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  .inf2 {
    color: #161616;
    border-top: 1px solid rgb(0, 0, 0, 0.2);
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  .form-control {
    border: 1px solid rgb(0, 0, 0, 0.2);
  }
  .evaluation_gen .star-ratings {
    margin-left: 10px;
    top: -4px;
  }
`;

export const Content = styled.div`
  max-width: 550px;
  @media screen and (max-width: 640px) {
    .slick-arrow {
      display: none;
    }
  }
  @media screen and (max-width: 770px) {
    margin: 0 auto;
  }

  .slick-arrow {
    z-index: 99;
  }
  .arrow-left:hover {
    color: #202020;
  }
  .arrow-right:hover {
    color: #202020;
  }
  .slick-arrow {
    color: #6f6f6f;
    visibility: hidden;
  }
  .slick-slider:hover .slick-arrow::before {
    visibility: visible;
  }
  .slick-slider {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  .slick-slide {
    padding: 5px;
  }
  .rep_img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 300px;
  }
  .rep_img img {
    max-height: 250px;
    max-width: 300px;
  }
  .content_img {
    border: 1px solid #dadada;
    background-color: #f0f0f0;
    height: 70px;
    min-width: 75px;
    overflow: hidden;
    padding: 10px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .content_img:hover {
    border: 1px solid #ff9e6a;
  }
  .content_img img {
    max-width: 70px;
    max-height: 65px;
  }
`;
export const Information = styled.div`
  text-align: left;
  padding: 15px;

  /* Informações do header */
  .information_header .social_feed a {
    margin-left: 5px;
    color: #202020;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.8rem;
  }
  .information_header .social_feed span {
    margin-left: 5px;
    color: #202020;
    cursor: pointer;
    font-weight: bold;
  }
  .information_header ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .information_header li {
    float: left;
    margin-right: 20px;
  }
  .clearB {
    clear: both;
  }
  .information_header h3 {
    font-weight: 600;
    margin-top: 15px;
  }
  /* Informações do Middle */
  .information_middle ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .information_middle li {
    float: left;
    margin-right: 20px;
  }
  .information_middle .stock i {
    color: #3ea662;
  }
  .information_middle .stock span {
    font-weight: 600;
    font-size: 1rem;
  }
  .information_middle .evaluation i {
    color: #ff6a22;
  }
  .information_middle .evaluation span {
    font-weight: 600;
    font-size: 1rem;
  }
  .evaluation .star-ratings {
    top: -4px;
  }
  .information_middle .calendar span {
    font-weight: 600;
    font-size: 1rem;
  }

  /* Informações do Footer */
  .information_footer .price {
    margin-top: 10px;
  }
  .information_footer .price .icon {
    color: #585858;
    margin-right: 15px;
    font-size: 30px;
  }
  .information_footer .price .value {
    font-weight: bold;
    font-size: 1.8rem !important;
    color: #008c00;
  }
  .information_footer .price .value_parcel {
    font-weight: bold;
    font-size: 1.8rem !important;
    color: #ff6b24;
  }
  .information_footer .price .descont {
    margin-top: -5px;
    font-size: 0.8rem !important;
  }
  .information_footer .price .descont span {
    color: #ff6b24;
    font-weight: bold;
    font-size: 1rem;
  }
  .information_footer .parcel {
    list-style: none;
    padding: 0 0 0 10px;
  }
  .information_footer .parcel span {
    color: #ff6b24;
    font-weight: bold;
  }
  .view_parcel {
    cursor: pointer;
    color: #383838;
  }
  .view_parcel strong {
    font-size: 0.8rem;
  }
`;
