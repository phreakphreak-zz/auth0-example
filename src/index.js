import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domainAuth0 = process.env.REACT_APP_DOMAIN_AUTH0;
const clientIdAuth0 = process.env.REACT_APP_CLIENT_ID_AUTH0;

ReactDOM.render(
  <Auth0Provider
    domain={domainAuth0}
    clientId={clientIdAuth0}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
