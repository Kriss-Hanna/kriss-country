import { MdDarkMode } from "react-icons/md";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>

      <div className="dark-mode-button" onClick={() => setDarkMode(!darkMode)}>
        <i>
          <MdDarkMode size={25} />
        </i>
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  darkMode: Proptypes.bool.isRequired,
  setDarkMode: Proptypes.func.isRequired,
};
