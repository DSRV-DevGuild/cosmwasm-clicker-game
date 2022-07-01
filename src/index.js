import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App-header">
      <App />
      <div className="footer-container">
        <span>Made with</span>
        <img src="./dsrv.png" id="footer-logo" alt="dsrv-logo"></img>
      </div>
    </div>
  </React.StrictMode>
);
