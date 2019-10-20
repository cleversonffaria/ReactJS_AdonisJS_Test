import React from "react";
import $ from "jquery";
import { Header, Product } from "../../components";
// import { Container } from './styles';

export default function Site() {
  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".menuNotFixed").addClass("escondeMenu");
      $(".menuFixed").addClass("mostraMenu");
    } else if ($(window).scrollTop() < 100) {
      $(".menuFixed").removeClass("mostraMenu");
      $(".menuNotFixed").removeClass("escondeMenu");
    }
  });
  return (
    <React.Fragment>
      <Header />
      <Product />
    </React.Fragment>
  );
}
