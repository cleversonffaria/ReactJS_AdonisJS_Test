import React, { useState } from "react";
// eslint-disable-next-line
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { isAuthenticated } from "./services/auth";
import "./App.scss";
// Redux
import store from "./store";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center loading">
    <i className="fa fa-refresh fa-spin"></i> Carregando...
  </div>
);
// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/admin/Pages/Login"));
const Register = React.lazy(() => import("./views/admin/Pages/Register"));
const Page404 = React.lazy(() => import("./views/admin/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/admin/Pages/Page500"));
const Site = React.lazy(() => import("./views/site"));

const PrivateRoute = ({ status, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        (status === 1 && <DefaultLayout {...props} />) || (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
export default function App() {
  const [status, setstatus] = useState();
  return (
    <HashRouter>
      <Provider store={store}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login setstatus={setstatus} {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={props => <Register {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => <Page500 {...props} />}
            />
            {/* <PrivateRoute path="/admin" name="Admin" status={status} /> */}
            <Route
              path="/admin"
              name="Admin"
              render={props => <DefaultLayout {...props} />}
            />
            <Route
              exact
              path="/"
              name="Home"
              render={props => <Site {...props} />}
            />
            {/* <Route path="/products/:page?/:count" render={props => <Site {...props} />} /> */}
            <Route path="*" render={props => <Page404 {...props} />} />
          </Switch>
        </React.Suspense>
      </Provider>
    </HashRouter>
  );
}
