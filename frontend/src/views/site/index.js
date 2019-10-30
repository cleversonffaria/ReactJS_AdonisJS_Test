import React from "react";
import $ from "jquery";
import { Route, Switch } from "react-router-dom";
import { Header, Siderbar } from "../../components";
import { Body } from "./style";

import routes from "./routes";

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
      <main className="main">
        <React.Suspense fallback={loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </React.Suspense>
      </main>
    </Body>
  );
}
