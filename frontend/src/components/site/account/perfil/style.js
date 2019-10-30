import styled from "styled-components";

export const Body = styled.div`
  text-align: center;
  .welcome {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  .manager {
    color: #7a7a7a;
  }
  .edit .linkPhoto {
    color: #fff;
    cursor: pointer;
    float: right;
    width: 60px;
    height: 20px;
  }
  .edit {
    height: 60px;
  }
  .edit .imgPerfil {
    width: 60px;
    border-radius: 30px;
  }
  .edit .editImage i {
    padding: 5px;
    margin-left: 16px;
  }
  .edit .editImage {
    border-radius: 0 0 100px 100px;
    height: 30px;
    width: 100%;
    position: relative;
    top: -30px;
    background: rgb(0, 0, 0, 0.2);
  }
`;
export const Information = styled.div`
  margin-top: 1rem;
`;
export const InforCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  .arrow-positive {
    color: #4dbd74;
    float: right;
  }
  .arrow-negative {
    color: #f86c6b;
    float: right;
  }
  .inf {
    color: #202020;
    font-size: 16px;
    font-weight: 600;
  }
  .campo {
    color: #515151;
    font-size: 13px;
  }
`;
