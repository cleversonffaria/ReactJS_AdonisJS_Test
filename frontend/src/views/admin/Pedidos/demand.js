import React from "react";

// import { Container } from "./style";
import { Card, CardBody, Row, Col } from "reactstrap";

export default function Demand() {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardBody>Pedidos</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
