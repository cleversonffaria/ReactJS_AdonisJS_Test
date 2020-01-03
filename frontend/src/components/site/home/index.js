import React, { useState, useEffect } from "react";
import { Container, Alert, Row, Col, Card, CardBody } from "reactstrap";

import MapGL from "react-map-gl";

import { Products, Carousels } from "../../../components";
import { Body, QuemSomos, Title } from "./style";
import api from "../../../services/api";

const TOKEN =
  "pk.eyJ1IjoiY2xldmVyc29uZmZhcmlhIiwiYSI6ImNrMmFtMTlvdzAyYjMzY2xrYTBvcjN0cWgifQ.sHhyf21E0VkKelhvH0YDNA";

export default function Home({ ...props }) {
  const [message, setMessage] = useState();
  const [products, setProducts] = useState();

  const [viewport, setViewport] = useState({
    latitude: -21.1574,
    longitude: -41.5651,
    zoom: 15,
    bearing: 0,
    pitch: 0
  });

  useEffect(() => {
    const produtos = async () => {
      await api
        .get("products")
        .then(res => setProducts(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    produtos();
  }, []);

  return (
    <Body>
      {(message && <Alert color="danger">{message}</Alert>) || (
        <Container fluid>
          <Carousels />
          <Products {...props} categoryTitle="Novidades" products={products} />
          <QuemSomos>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <Title>
                      <i className="fa fa-users mr-3"></i>
                      Quem Somos
                      <div
                        className="d-block m-auto"
                        style={{ border: "0.7px solid #ff641a", width: "80px" }}
                      ></div>
                    </Title>
                  </Col>
                  <Col xs="12" sm="12" lg="5" xl="6" className="d-block m-auto">
                    <div className="quemsomos">
                      <p>
                        Onde encontra tudo para o seu provedor de internet em
                        todos os seguimentos (Wireless, Cabo UTP e Fibra
                        Óptica). Trabalhamos com diversos fabricantes nacionais
                        e internacionais como: Mikrotik, Ubiquiti, 2flex,
                        Fiberwan, Tenda, O-Tech, Greatek entre outros.
                      </p>
                      <p>
                        Temos uma infinidade de produtos de A à Z para a sua
                        rede com marcas que prezam pela qualidade do produto sem
                        deixar de lado a legislação sendo todos eles homologados
                        com o selo Anatel, dando a você nosso cliente segurança
                        de qualidade e prevenindo de futuros problemas com a
                        lei.
                      </p>
                      <p>
                        Nós prezamos pelo atendimento técnico e eficaz
                        orientando você a comprar o produto que se adéqua com a
                        sua necessidade.
                      </p>
                      Venha comprar com quem entende!
                    </div>
                  </Col>
                  <Col xs="12" sm="12" lg="7" xl="6" className="mapa">
                    <div className="d-block m-auto" style={{ width: "500px" }}>
                      <MapGL
                        width={500}
                        height={300}
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        mapboxApiAccessToken={TOKEN}
                        onViewportChange={viewport => setViewport(viewport)}
                      ></MapGL>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </QuemSomos>
          <Products {...props} categoryTitle="Promoções" products={products} />
        </Container>
      )}
    </Body>
  );
}
