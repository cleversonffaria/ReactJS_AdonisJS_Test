import React, { Suspense } from "react";
import $ from "jquery";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
// import { Header, Product, Siderbar } from "../../components";
import { Body } from "./style";
const Carousels = React.lazy(() => import("../../components/carousels"));
const Product = React.lazy(() => import("../../components/product"));
const Header = React.lazy(() => import("../../components/header"));
const Siderbar = React.lazy(() => import("../../components/siderbar"));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center loading">
    <i className="fa fa-refresh fa-spin"></i> Carregando...
  </div>
);
export default function Site(props) {
  $(window).bind("scroll resize", function(event) {
    if ($(window).scrollTop() > 100) {
      $(".search_menu").removeClass("escondeCat");
      $(".menuNotFixed").addClass("escondeMenu");
      $(".menuFixed").addClass("mostraMenu");
    } else if ($(window).scrollTop() < 100) {
      $(".search_menu").addClass("escondeCat");
      $(".menuFixed").removeClass("mostraMenu");
      $(".menuNotFixed").removeClass("escondeMenu");
    }
    if (event.currentTarget.innerWidth > 991) {
      $(".menuFixed").removeClass("escondeMenu");
    } else {
      $(".menuNotFixed").removeClass("escondeMenu");
      $(".menuFixed").addClass("escondeMenu");
    }
  });

  return (
    <Body>
      <Header {...props} />
      <Siderbar {...props} />

      <Suspense fallback={loading()}>
        <main className="main">
          <Carousels/>
          <Product title=" Só aqui tem as melhores ofertas para você cliente e amigo!" catTitle="Wireless" paginator={true}/>
        </main>
      </Suspense>
    </Body>
  );
}
