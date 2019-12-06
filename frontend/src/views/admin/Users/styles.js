import styled from "styled-components";

export const Cliente = styled.div`
  .header_edit {
    color: #23282c;
  }
  ul {
    list-style: none;
  }
  /* Dados */
  .imagem_perfil {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin-left: 1rem;
  }
  .user_data li {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }
  .user_data li i {
    margin-bottom: 5px;
    font-size: 25px;
  }
  .user_data .name {
    color: #383838;
    font-weight: bold;
    font-size: 30px;
    margin: 0;
  }
  .user_data .cpf {
    color: #444444;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  /* Endereço */
  .user_address {
    padding: 0;
    font-size: 14px;
    color: #444;
  }
  /* Historico */
  .history_demand {
    font-weight: bold;
    color: #373737;
  }
  .history_hrs {
    color: #676767;
  }
  /* Pedidos Finalizado */
  .demand_final {
    color: #444;
    font-weight: bold;
    font-size: 12px;
  }
  .demand_open {
    color: #202020;
    font-weight: bold;
    font-size: 16px;
  }
  .demand_info {
    padding: 0;
  }
  .demand_info li {
    color: #5c5c5c;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .demand_info li span {
    color: #303030;
    font-size: 14px;
  }
`;
