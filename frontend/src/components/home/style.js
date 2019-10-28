import styled from "styled-components";

export const Body = styled.div`
  text-align: center;
`;
export const QuemSomos = styled.div`
  .quemsomos {
    margin-top: 30px;
    display: block;
    font-size: 18px;
    font-family: Roboto, sans-serif;
  }
  .mapa {
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    .mapa {
      display: none;
    }
  }
  text-align: justify;
`;
export const Title = styled.mark`
  i {
    display: block;
    position: relative;
    top: 45px;
    left: 10px;
    color: rgb(0, 0, 0, 0.2);
    font-size: 60px;
  }
  background: none;
  font-size: 2rem;
  display: block;
  text-align: center;
  margin-bottom: 10px;
`;
