import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LinksContextProvider from "./store/links-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LinksContextProvider>
      {" "}
      <App />
    </LinksContextProvider>
  </React.StrictMode>
);
