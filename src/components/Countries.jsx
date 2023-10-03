import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const Countries = ({ country }) => {
  return (
    <Link to={{ pathname: `/${country.name.common}` }}>
      <img
        className="flag-card"
        src={country.flags.png}
        alt={country.name.common}
      />
      <h3>{country.name.common}</h3>
      <p>
        <span>Population:</span> {country.population}
      </p>
      <p>
        <span>Région:</span> {country.region}
      </p>
      <p>
        <span>Capital:</span> {country.capital}
      </p>
    </Link>
  );
};

export default Countries;

Countries.propTypes = {
  country: Proptypes.object,
};
