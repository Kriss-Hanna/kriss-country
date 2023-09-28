import Proptypes from "prop-types";

function SearchInputs({
  searchCountry,
  setSearchCountry,
  searchRegion,
  setSearchRegion,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchCountry}
        onInput={(e) => setSearchCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by Region"
        value={searchRegion}
        onInput={(e) => setSearchRegion(e.target.value)}
      />
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
