import styled from "styled-components";
export const ModalStyle = styled.div`
  .form-control {
    height: calc(1.5em + 1.1rem + 2px) !important;
    margin-top: 0.5rem;
    border: 1px solid #c5c5c5;
  }
  .form-control:focus {
    box-shadow: none;
  }
`;
export const Container = styled.div`
  text-align: center;
  .welcome {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .linkwidget {
    color: #202020 !important;
    text-decoration: none !important;
  }
  .config_user {
  }
  .config_user strong,
  i {
    color: #333333;
  }
  .chart_status {
    margin-top: 15px;
  }
  .success {
    color: #4dbd74;
    font-weight: bold;
  }
  .danger {
    color: #f86c6b;
    font-weight: bold;
  }
  .MuiTableRow-hover {
    cursor: pointer !important;
  }
`;
