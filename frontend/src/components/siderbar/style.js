import styled from "styled-components";

export const App = styled.div`
  .sidebar {
    top:31px;
    height: calc(100vh - 31px) !important;
    bottom: 0;
  }
  .sidebar .nav-link:hover {
    background: #ff8040;
  }
  .nav-link,
  .nav-title,
  .nav-icon {
    font-weight: 500;
  }
`;