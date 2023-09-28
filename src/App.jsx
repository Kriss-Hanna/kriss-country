import Home from "./page/Home";
import CardCountry from "./page/CardCountry";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:country" element={<CardCountry />} />
    </Routes>
  );
};

export default App;
