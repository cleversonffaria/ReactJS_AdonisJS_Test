import React from "react";
// Imports Externos
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
// Imports Internos
import demandData from "./DemandData";
import { Container } from "./style";
// Fim imports

// Funções internas
function UserRow(props) {
  const user = props.user;
  const userLink = `/admin/demand/${user.id}`;

  const getBadge = status => {
    return status === "Pago"
      ? "success"
      : status === "Pendente"
        ? "warning"
        : status === "Enviado"
          ? "primary"
          : "danger";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.name}</Link>
      </td>
      <td>{user.product}</td>
      <td>{user.registered}</td>
      <td className="al-center">{user.amount}</td>
      <td>{user.price}</td>
      <td>
        <Link to={userLink}>
          <Badge className="p-2" color={getBadge(user.status)}>{user.status}</Badge>
        </Link>
      </td>
      <td>
        <Link to={userLink}>
          <Badge className="p-2" color={getBadge(user.statusDelivery)}>{user.statusDelivery}</Badge>
        </Link>
      </td>
    </tr>
  );
}
// Fim Funções internas
export default function Demand() {
  const demandList = demandData.filter(user => user.id < 10);
  return (
    <Container className="animated fadeIn">
      <Row>
        <Col xl="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Pedidos{" "}
              <small className="text-muted">Pendentes</small>
            </CardHeader>
            <CardBody>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome do cliente</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Data</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">Status do pagamento</th>
                    <th scope="col">Status da entrega</th>
                  </tr>
                </thead>
                <tbody>
                  {demandList.map((user, index) => (
                    <UserRow key={index} user={user} />
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}