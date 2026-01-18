console.log(
  "%c Designed and Developed by Mukesh Thikdar ",
  "background-image: linear-gradient(90deg,#00000,#000); color: white;font-weight:900;font-size:1rem; padding:20px; align-text:center;"
);

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
