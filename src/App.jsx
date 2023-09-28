import { useState, useEffect } from "react";
import SearchInputs from "./components/SearchInputs";
import Header from "./components/Header";

function App() {
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const savedMode = localStorage.getItem("dark-mode");
  const [darkMode, setDarkMode] = useState(savedMode === "true" ? true : false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountry(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Filter by name and region
  const filteredCountries = country.filter((c) => {
    return (
      c.name.common.toLowerCase().includes(searchCountry.toLowerCase()) &&
      c.region.toLowerCase().includes(searchRegion.toLowerCase())
    );
  });

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <SearchInputs
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        searchRegion={searchRegion}
        setSearchRegion={setSearchRegion}
      />

      <div className="countries-container">
        {filteredCountries.map((c) => (
          <div className="country-card" key={c.flag}>
            <img src={c.flags.png} alt={c.name.common} />
            <p>{c.name.common}</p>
            <p>{c.population}</p>
            <p>{c.capital}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
