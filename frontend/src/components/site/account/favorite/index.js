import React from "react";
import { Card, CardBody, Table, Button } from "reactstrap";
import { Body } from "./style";
export default function Demand({ user, ...props }) {
  const lista = [
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto Medio",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    },
    {
      nome: "Um nome de produto grande para ver como fica",
      categoria: "Wireless",
      subcategoria: "Roteadores",
      visualizar: true
    }
  ];
  return (
    <Body>
      <Card>
        <CardBody>
          <h4 className="welcome">Favoritos</h4>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Nome do Produto</th>
                <th>Categoria</th>
                <th>Subcategoria</th>
                <th>Visualizar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {lista.map(iten => (
                <tr>
                  <td className="name">{iten.nome}</td>
                  <td>{iten.categoria}</td>
                  <td>{iten.subcategoria}</td>
                  <td>
                    <Button className="p-0 pr-2 pl-2 visualizar" color="light">
                      <i className="fa icons-eye2 fa-lg"></i>
                    </Button>
                  </td>
                  <td>
                    <Button className="p-0 pr-2 pl-2 excluir" color="light">
                      <i className="fa fa-trash-o fa-lg"></i>
                    </Button>
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
