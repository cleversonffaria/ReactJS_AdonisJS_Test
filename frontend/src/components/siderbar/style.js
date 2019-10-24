import styled from "styled-components";

export const App = styled.div`
  .sidebar {
    height: calc(100vh - 30px);
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
