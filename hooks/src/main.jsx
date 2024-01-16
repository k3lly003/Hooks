import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomeState from "./pages/HomeState.jsx";
import HomeEffect from "./pages/HomeEffect.jsx";
import HomeContext from "./pages/HomeContext.jsx";
import About from "./pages/About.jsx";
import Feedback from "./pages/Feedback.jsx";
import FollowUs from "./pages/FollowUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/useState" element={<HomeState />} />
        <Route exact path="/useEffect" element={<HomeEffect />} />
        <Route exact path="/useContext" element={<HomeContext />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/FollowUs" element={<FollowUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
