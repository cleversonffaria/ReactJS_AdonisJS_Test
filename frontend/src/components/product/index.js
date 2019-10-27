// Import de Bibliotecas
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";
// Import Internos
import { Paginator } from "../index";
import api from "../../services/api";
import base from "../../_env";
import { Body,Title } from "./style";

export default function Product({ title ,catTitle,paginator}) {
  const [products, setProducts] = useState();
  useEffect(() => {
    const produtos = async () => {
      await api.get("product").then(res => setProducts(res.data));
    };
    produtos();
  }, []);
  // const product = useSelector(state => state.product.data);
  return (
    <Body>
      {catTitle && (
        <Title>
        <i className="fa icons-wifi-full mr-3"></i>
        {catTitle}
        <div className="d-block m-auto" style={{border:"0.7px solid #ff641a",width:"80px"}}></div>
        </Title>
      )}
     
      <Container fluid>
        <Row>
          {title && (
            <Col xs="10" className="m-auto">
              <Card>
                <CardBody className="p-2">
                  <div className="cardGroud"></div>
                  <div className="d-flex">
                    <div className="cardInfor m-auto">{title}</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          )}         
          {products &&
            products.map(produto => {
              return (
                <Col
                  key={produto.id}
                  className="d-flex"
                  xs="12"
                  sm="6"
                  md="6"
                  lg="3"
                >
                  <Card className="w-100">
                    <CardBody
                      className="cardProduct"
                      onClick={() => alert("Cliquei")}
                    >
                      <img
                        src={`${base.ApiUrl}/uploads/${produto.image}`}
                        alt={produto.name}
                        width="150px;"
                      />
                      <div className="information">
                        <mark className="title">{produto.name}</mark>
                        <span className="price_ofert">
                          {produto.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                          })}
                        </span>
                        <span className="price">
                          {(
                            produto.price -
                            produto.price * (produto.descont / 100)
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                          })}
                        </span>
                        <span className="price_credit">
                          12x de{" "}
                          {(produto.price / 12).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL"
                          })}
                        </span>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Button color="success">
                        <i className="fa fa-check"></i>
                        Comprar
                      </Button>
                      <Button outline color="danger">
                        <i className="fa fa-plus-circle"></i>
                        Carrinho
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
        </Row>
        {paginator && (
        <Paginator totalPag="5"></Paginator>
        )}
      </Container>
    </Body>
  );
}
