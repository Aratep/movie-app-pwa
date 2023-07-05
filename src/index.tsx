import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheetManager } from "styled-components";

// MAIN APP
import App from "App";
import "index.css";
// SERVICE WORKERS FOR PWA
import * as serviceWorkerRegistration from "serviceWorkerRegistration";
// REPORT WEB VITALS
import reportWebVitals from "reportWebVitals";
// STORE
import store, { persistor } from "store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyleSheetManager shouldForwardProp={() => true}>
          <App />
        </StyleSheetManager>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
