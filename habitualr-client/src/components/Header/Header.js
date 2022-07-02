import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="brand">
        <div className="brand__link-content">
          <h1 className="brand__item-title">Sproutr</h1>
          <nav className="brand__nav">
            <ul className="brand__nav-list">
              <li className="brand__nav-item">
                <NavLink to="/" exact={true}>
                  Home
                </NavLink>
              </li>

              <li className="brand__nav-item">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
