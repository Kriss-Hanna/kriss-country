import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CardCountry = () => {
  const [countryFetch, setCountryFetch] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});

  const { country } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((res) => setCountryFetch(res))
      .catch((err) => console.log(err));
  }, [country]);

  useEffect(() => {
    if (countryFetch[0]) {
      setCountryDetails(countryFetch[0]);
    }
  }, [countryFetch]);

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
  } = countryDetails;

  console.log(countryDetails);

  return (
    <>
      <div className="container-details">
        <Link className="back" to="/">
          Back
        </Link>
        <div className="img-container">
          <img src={flags?.png} alt={name?.common} />
        </div>

        <div className="info-container">
          <h3>{name?.common}</h3>
          <div className="details-container">
            <div className="left">
              <p>
                <span>Native Name:</span> {name?.common}
              </p>
              <p>
                <span>Population:</span> {population && population}
              </p>
              <p>
                <span>Region:</span> {region && region}
              </p>
              <p>
                <span>Sub Region:</span> {subregion && subregion}
              </p>
              <p>
                <span>CapitalRegion:</span> {capital && capital}
              </p>
            </div>

            <div className="right">
              <p>
                <span>Top Level Domain:</span> {tld && tld}
              </p>
              <p>
                <span>Currencies:</span> {currencies?.VES?.name}{" "}
              </p>
              <p>
                <span>Languages:</span> {languages?.fra}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCountry;
