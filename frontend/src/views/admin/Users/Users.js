import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

import usersData from "./UsersData";

function UserRow(props) {
  const user = props.user;
  const userLink = `/admin/user/${user.id}`;

  const getBadge = status => {
    return status === "Ativo"
      ? "success"
      : status === "Bloqueado"
      ? "danger"
      : status === "Pendente"
      ? "warning"
      : "primary";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.name}</Link>
      </td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td>
        <Link to={userLink}>
          <Badge className="p-2" color={getBadge(user.status)}>{user.status}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class Users extends Component {
  render() {
    const userList = usersData.filter(user => user.id < 10);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista {" "}
                <small className="text-muted">Clientes</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Data do Cadastro</th>
                      <th scope="col">Privilégio</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => (
                      <UserRow key={index} user={user} />
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Users;
