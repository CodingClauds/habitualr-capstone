import "./Footer.scss";
import github from "";
import linkedin from "";
import instagram from "";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <h2 className="footer__title">Contact Us</h2>

        <div className="footer__social">
          <img
            className="footer__handle"
            src={instagram}
            alt="instagram icon"
          />
          <img className="footer__handle" src={linkedin} alt="linkedin icon" />
          <img className="footer__handle" src={github} alt="github icon" />
        </div>

        <div className="footer__acknowledgements">
          <span>Claudio Miranda</span>

          <Link className="footer__email" href="mailto:info@sproutrinc.com">
            info@sproutrInc.com
          </Link>
          <span>© Sproutr All rights Reserved</span>
        </div>
      </section>
    </>
  );
}

export default Footer;
