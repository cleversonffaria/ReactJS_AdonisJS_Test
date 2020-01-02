import React, { useEffect, useState } from "react";
// Imports Externos
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
// Imports Internos
import usersData from "./UsersData";
import api from "../../../services/api";
// Fim imports
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
  const getPrivilege = status => {
    switch (status) {
      case 1:
        return "Administrador";
      case 2:
        return "Colaborador";
      case 3:
        return "Usuário";
      default:
        return "Indefinido";
        break;
    }
  };
  function formatDate(date) {
    var monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " de " + monthNames[monthIndex] + " de " + year;
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.username}</Link>
      </td>
      <td>{user.email}</td>
      <td>{getPrivilege(user.user_status)}</td>
      <td>{formatDate(new Date(user.created_at))}</td>
      {/* <td>
        <Link to={userLink}>
          <Badge className="p-2" color={getBadge(user.status)}>
            {user.user_status}
          </Badge>
        </Link>
      </td> */}
    </tr>
  );
}

export default function Users() {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const userList = data && data.filter(user => user.id < 10);

  useEffect(() => {
    const users = async () => {
      await api
        .get("users")
        .then(res => setData(res.data))
        .catch(error =>
          setMessage("Não existe usuário cadastrado no sistema.")
        );
    };
    users();
  }, []);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Lista{" "}
              <small className="text-muted">Clientes</small>
            </CardHeader>
            <CardBody>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Privilégio</th>
                    <th scope="col">Data do Cadastro</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    userList.map((user, index) => (
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
