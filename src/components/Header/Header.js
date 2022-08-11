import { Link } from "react-router-dom";
import "./Header.scss";
import brandLogo from "../../assets/images/sprout-tree.svg";

function Header() {
  return (
    <>
      <header className="brand">
        <div className="brand__content">
          <div className="brand__image-cont">
            <img className="brand__image" src={brandLogo} alt="brand logo" />
            <a href="/">
              <h1 className="brand__item-title">Sproutr</h1>
            </a>
          </div>

          <nav className="brand__nav">
            <ul className="brand__nav-list">
              <li className="brand__nav-item">
                <Link to="/sign-in" activeclassname="is-active">
                  <p className="brand__bold">Sign In</p>
                </Link>
              </li>

              <li className="brand__nav-item">
                <Link to="/habit" activeclassname="is-active">
                  <p className="brand__bold">Habits</p>
                </Link>
              </li>

              <li className="brand__nav-item">
                <Link to="/calendar" activeclassname="is-active">
                  <p className="brand__bold">Calendar</p>
                </Link>
              </li>

              <li className="brand__nav-item">
                <Link to="/about-us" activeclassname="is-active">
                  <p className="brand__bold">About Us</p>
                </Link>
              </li>

              {/* <li className="brand__nav-item">
                <Link to="/sign-up" activeclassname="is-active">
                  <p className="brand__bold">Sign Up</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
