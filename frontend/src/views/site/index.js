import React from "react";
import $ from "jquery";
import { Header, Product, Siderbar } from "../../components";
// import { Container } from './styles';

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
    <React.Fragment>
      <Siderbar {...props} />
      <Header {...props} />
      <main className="main">
        <Product />
      </main>
    </React.Fragment>
  );
}
