import React from "react";
import { Card, CardBody, Badge, Table, Button } from "reactstrap";
import { Body } from "./style";
export default function Demand({ user, ...props }) {
  const status_payment = true;
  const status_payment2 = false;
  const lista = [
    {
      qtd: "2",
      nome: "Roteador",
      data: "27/10/2018",
      pagamento: status_payment,
      status: "Entregue",
      acao: status_payment
    },
    {
      qtd: "1",
      nome: "Um nome pequeno",
      data: "27/10/2019",
      pagamento: status_payment2,
      status: "Preparando para envio",
      acao: status_payment2
    },
    {
      qtd: "10",
      nome: "Um nome de modelo medio .... ",
      data: "27/10/2019",
      pagamento: status_payment,
      status: "Em trânsito",
      acao: status_payment
    },
    {
      qtd: "520",
      nome: "Um nome de produto grande para ver como fica no exemplo",
      data: "27/10/2019",
      pagamento: status_payment2,
      status: "Pendente",
      acao: status_payment2
    }
  ];
  return (
    <Body>
      <Card>
        <CardBody>
          <h4 className="welcome">Minhas Compras</h4>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Quantidade</th>
                <th>Nome do Produto</th>
                <th>Data da Compra</th>
                <th>Pagamento</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {lista.map(iten => (
                <tr>
                  <td>{iten.qtd}</td>
                  <td className="name">{iten.nome}</td>
                  <td>{iten.data}</td>
                  <td className="payment">
                    {iten.pagamento ? (
                      <div>
                        <i className="fa fa-check fa-lg arrow-positive"></i>
                        Realizado
                      </div>
                    ) : (
                      <div>
                        <i className="fa fa-close fa-lg arrow-negative"></i>
                        Não realizado
                      </div>
                    )}
                  </td>
                  <td>
                    {iten.status === "Entregue" ? (
                      <Badge color="success" className="p-2">
                        {iten.status}
                      </Badge>
                    ) : iten.status === "Em trânsito" ? (
                      <Badge color="primary" className="p-2">
                        {iten.status}
                      </Badge>
                    ) : iten.status === "Preparando para envio" ? (
                      <Badge color="warning" className="p-2">
                        {iten.status}
                      </Badge>
                    ) : (
                      <Badge color="danger" className="p-2">
                        {iten.status}
                      </Badge>
                    )}
                  </td>
                  <td>
                    {iten.acao ? (
                      <Button
                        className="p-0 pr-2 pl-2 visualizar"
                        color="light"
                      >
                        <i className="fa icons-eye2 fa-lg"></i>
                      </Button>
                    ) : (
                      <Button className="p-0 pr-2 pl-2 excluir" color="light">
                        <i className="fa fa-trash-o fa-lg"></i>
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Body>
  );
}
