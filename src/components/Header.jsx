import { MdDarkMode } from "react-icons/md";
import Proptypes from "prop-types";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="App-header">
      <h1>Where in the world?</h1>
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
