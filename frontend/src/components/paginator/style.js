import styled from "styled-components";

export const Container = styled.div`
  .pagination {
    justify-content: center;
  }
  .page-item.active .page-link {
    color: #fff;
    background-color: #ff641a;
    border-color: #ff641a;
  }
  .page-link:hover {
    color: #ff641a;
    background-color: #e4e7ea;
    border-color: #ff641a;
  }
  .page-link {
    color: #ff641a;
  }
  .page-link:focus {
    box-shadow: none;
  }
`;
