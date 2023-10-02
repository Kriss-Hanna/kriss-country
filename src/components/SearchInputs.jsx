import Proptypes from "prop-types";

function SearchInputs({
  searchCountry,
  setSearchCountry,
  searchRegion,
  setSearchRegion,
}) {
  const region = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="search-container">
      <div className="input-country-container">
        <input
          type="text"
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
        <button onClick={() => setSearchCountry("")}>X</button>
      </div>

      <select
        value={searchRegion || ""}
        placeholder={searchRegion === "" && "Search for a region"}
        onChange={(e) => setSearchRegion(e.target.value)}
      >
        {region.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchInputs;

SearchInputs.propTypes = {
  searchCountry: Proptypes.string.isRequired,
  setSearchCountry: Proptypes.func.isRequired,
  searchRegion: Proptypes.string.isRequired,
  setSearchRegion: Proptypes.func.isRequired,
};
