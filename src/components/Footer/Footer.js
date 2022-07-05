import "./Footer.scss";
import github from "../../assets/images/github-white.svg";
import linkedin from "../../assets/images/linkedin-white.svg";
import instagram from "../../assets/images/instagram-white.svg";
import twitter from "../../assets/images/twitter-white.svg";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__container-wrapper">
          <h2 className="footer__brand">Sproutr</h2>

          <div className="footer__contentbox">
            <h3 className="footer__title">Contact Us</h3>
            <p className="footer__text">504 Habitualr Way.</p>
            <p className="footer__text">Toronto, ON M6J 2Y6, Canada</p>
            <a className="footer__email" href="mailto:info@sproutrinc.com">
              info@sproutrinc.com
            </a>
          </div>

          <div className="footer__social">
            <img
              className="footer__handle"
              src={instagram}
              alt="instagram icon"
            />
            <a href="https://www.linkedin.com/in/miranda-claudio/">
              <img
                className="footer__handle"
                src={linkedin}
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/CodingClauds">
              <img className="footer__handle" src={github} alt="github icon" />
            </a>
            <img className="footer__handle" src={twitter} alt="twitter icon" />
          </div>

          <div className="footer__copyright-box">
            <span className="footer__copyright">
              Sproutr Inc. © All Rights Reserved 2022.
            </span>

            <div className="footer__acknowledgements">
              <span className="footer__copyright">Terms of Service</span>

              <span className="footer__copyright">Accessibility</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
