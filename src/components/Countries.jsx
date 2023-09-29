import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const Countries = ({ country }) => {
  console.log(country);
  return (
    <Link to={{ pathname: `/${country.name.common}` }}>
      <img src={country.flags.png} alt={country.name.common} />
      <p>{country.name.common}</p>
      <p>{country.population}</p>
      <p>{country.capital}</p>
    </Link>
  );
};

export default Countries;

Countries.propTypes = {
  country: Proptypes.object,
};
