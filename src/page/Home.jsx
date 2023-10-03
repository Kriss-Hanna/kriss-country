import { useState, useEffect } from "react";
import SearchInputs from "../components/SearchInputs";
import Countries from "../components/Countries";
import Proptypes from "prop-types";

function App({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");

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

App.propTypes = {
  darkMode: Proptypes.bool,
};
