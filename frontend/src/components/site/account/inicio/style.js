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
  .edit {
    margin: auto;
    width: 80px;
  }
  .edit span {
    color: #fff;
    cursor: pointer;
  }
  .edit .editImage i {
    display: none;
    padding: 7px;
  }
  .edit .editImage {
    border-radius: 0 0 5px 5px;
    height: 30px;
    position: relative;
    top: 80px;
  }
  .edit span:hover i {
    display: block;
  }
  .edit span:hover .editImage {
    background: rgb(0, 0, 0, 0.4);
  }
`;
export const Menu = styled.div`
  margin-top: 1rem;
  
`;
