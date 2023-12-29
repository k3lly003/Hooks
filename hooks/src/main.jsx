import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomeState from "./pages/HomeState.jsx";
import HomeEffect from "./pages/HomeEffect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/useState" element={<HomeState />} />
        <Route exact path="/useEffect" element={<HomeEffect />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
