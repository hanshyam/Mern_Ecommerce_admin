import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
