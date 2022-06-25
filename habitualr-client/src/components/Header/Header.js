import "../Header/Header.scss";
import brandlogo from "../../assets/images/wrench-black-100x100.png";

function Header() {
  return (
    <>
      <header className="brand">
        <div className="brand__logo-content">
          <li className="brand__item">
            <a className="brand__site-link" href="/">
              {/* <img
                className="brand__site-logo"
                src={brandlogo}
                alt="The brand logo of the website is a wrench symbolizing to fix/adju to a new/existing habit"
              /> */}
            </a>
          </li>
        </div>
        <div className="brand__link-content">
          <nav className="brand__nav">
            {/* <h1 className="brand__item-title">Habitualr</h1> */}
            <h1 className="brand__item-title">Habitr</h1>
            <h2 className="brand__item-statement">
              Build &amp; Track the Habits that matter.
            </h2>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
