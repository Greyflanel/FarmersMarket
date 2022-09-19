import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; 
import "./styles/index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
  useNavigate.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <Auth0Provider {...providerConfig}>
      <Router>
  <React.StrictMode>      
        <App />
  </React.StrictMode>      
    </Router>
  </Auth0Provider>
 
);


