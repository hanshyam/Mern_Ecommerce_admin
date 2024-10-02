import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
