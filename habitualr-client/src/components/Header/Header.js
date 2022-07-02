import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="brand">
        <div className="brand__link-content">
          <nav className="brand__nav">
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
