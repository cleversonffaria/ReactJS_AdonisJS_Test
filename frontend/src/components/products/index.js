/* eslint-disable no-unused-vars */
// Import de Bibliotecas
import React from "react";
// import { useSelector } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button,
  Alert
} from "reactstrap";
// Import Internos
import { Paginator } from "../index";
import base from "../../_env";
import { Body, Title } from "./style";

export default function Product({
  title,
  categoryTitle,
  paginator,
  totalPaginator,
  products,
  ...props
}) {
  // const product = useSelector(state => state.product.data);
  return (
    <Body>
      <Row>
        {categoryTitle && (
          <Col xs="12">
            <Title>
              {/* <i className="fa icons-wifi-full mr-3"></i> */}
              {categoryTitle}
              <div
                className="d-block m-auto"
                style={{ border: "0.7px solid #ff641a", width: "80px" }}
              ></div>
            </Title>
          </Col>
        )}
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
                md="4"
                lg="4"
                xl="3"
              >
                <Card className="productCard">
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
        {paginator && (
          <Col xs="12">
            <Paginator
              totalPag={totalPaginator && totalPaginator}
              {...props}
            ></Paginator>
          </Col>
        )}
      </Row>
    </Body>
  );
}
