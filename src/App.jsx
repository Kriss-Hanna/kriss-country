import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CardCountry from "./page/CardCountry";
import Header from "./components/Header";

const App = () => {
  //Dark mode
  const savedMode = localStorage.getItem("dark-mode");
  const [darkMode, setDarkMode] = useState(savedMode === "true" ? true : false);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/:country" element={<CardCountry />} />
      </Routes>
    </>
  );
};

export default App;
