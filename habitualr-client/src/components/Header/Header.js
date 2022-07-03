import { Link } from "react-router-dom";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="brand">
        <div className="brand__content">
          <h1 className="brand__item-title">Sproutr</h1>
          <nav className="brand__nav">
            <ul className="brand__nav-list">
              <li className="brand__nav-item">
                <Link to="/" exact={true} activeClassName="is-active">
                  <p className="brand__bold">Home</p>
                </Link>
              </li>

              <li className="brand__nav-item">
                <Link to="/habit" activeClassName="is-active">
                  <p className="brand__bold">Habits</p>
                </Link>
              </li>

              <li className="brand__nav-item">
                <Link to="/about-us" activeClassName="is-active">
                  <p className="brand__bold">About Us</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
