import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CardCountry = () => {
  const [countryFetch, setCountryFetch] = useState([]);
  const { country } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((res) => setCountryFetch(res))
      .catch((err) => console.log(err));
  }, [country]);

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = countryFetch[0];

  console.log(languages, currencies);

  return (
    <div>
      <Link to="/"> Back </Link>

      <div className="container">
        <div className="img-container">
          <img src={flags.png} alt={name.common} />
        </div>

        <div className="info-container">
          <div className="left">
            <h3>{name.common}</h3>
            <p>Native Name: {name.common}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>CapitalRegion: {capital}</p>
          </div>

          <div className="right">
            <p>Top Level Domain: {tld}</p>
            <p>Currencies: </p>
            <p>Languages: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCountry;
