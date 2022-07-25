import navicon from "./assets/navicon.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-img">
        <img className="nav-icon" src={navicon} alt="icon" />
      </div>
      <div className="nav-title">Weather Forecaster</div>
    </div>
  );
}

export default Navbar;
