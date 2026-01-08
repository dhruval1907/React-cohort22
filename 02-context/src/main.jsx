import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Themecontext from "./context/Themecontext.jsx";
import { BrowserRouter } from "react-router-dom";
import Productcontext from "./context/Productcontext.jsx";

createRoot(document.getElementById("root")).render(
  <Themecontext>
    <BrowserRouter>
      <Productcontext>
        <App />
      </Productcontext>
    </BrowserRouter>
  </Themecontext>
);
