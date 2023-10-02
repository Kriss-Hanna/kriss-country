import { useState, useEffect } from "react";
import SearchInputs from "../components/SearchInputs";
import Header from "../components/Header";
import Countries from "../components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
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
      .then((res) => setCountries(res))
      .catch((err) => console.log(err));
  }, []);

  // Filter by name and region
  const filteredCountries = countries.filter((c) => {
    return (
      c.name.common.toLowerCase().includes(searchCountry.toLowerCase()) &&
      c.region.toLowerCase().includes(searchRegion.toLowerCase())
    );
  });

  return (
    <div className="container-app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <SearchInputs
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        searchRegion={searchRegion}
        setSearchRegion={setSearchRegion}
      />

      <div className="countries-container">
        {countries ? (
          filteredCountries.map((country) => (
            <div
              className="country-card"
              style={{ backgroundColor: darkMode && "#2C3844" }}
              key={country.name.common}
            >
              <Countries country={country} />
            </div>
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default App;
