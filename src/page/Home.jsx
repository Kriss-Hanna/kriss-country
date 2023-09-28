import { useState, useEffect } from "react";
import SearchInputs from "../components/SearchInputs";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function App() {
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");

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

  // Fetch data from API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setCountry(res))
      .catch((err) => console.log(err));
  }, []);

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
          <Link to={`/${c.name.common}`} key={c.name.common}>
            <div className="country-card" key={c.flag}>
              <img src={c.flags.png} alt={c.name.common} />
              <p>{c.name.common}</p>
              <p>{c.population}</p>
              <p>{c.capital}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
