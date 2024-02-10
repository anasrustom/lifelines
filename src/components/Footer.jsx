import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/LogoWith.png";

const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Community</h5>
              <ul>
                <li>
                  <Link to="#" className="no-cursor">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                    Brand Assets
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                    Mailing List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>More languages</h5>
              <ul>
                <li>
                  <Link to="#" className="no-cursor">
                  Arabic عربي
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                  Chinese 中文网
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                  French AFRIQUE
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                  Hindi हिन्दी
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                  Russian НА РУССКОМ
                  </Link>
                </li>
                <li>
                  <Link to="#" className="no-cursor">
                  Spanish MUNDO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Feedback</h5>
              <p>
                We value your feedback. Please let us know what you think about our website.
              </p>
              <form
                action="feedback.php"
                className="row form-dark"
                id="form_feedback"
                method="post"
                name="form_feedback"
              >
                <div className="col text-center">
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email_feedback"
                    name="email_feedback"
                    placeholder="enter your email"
                    required
                  />
                  <textarea
                    className="form-control"
                    id="txt_feedback"
                    name="txt_feedback"
                    placeholder="enter your feedback"
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-block mt-3 no-cursor" style={{backgroundColor: '#0033CC'}}>
                    Submit Feedback
                  </button>
                  <div className="clearfix"></div>
                </div>
              </form>
              <div className="spacer-10"></div>
              <small>Your feedback is important to us. We appreciate your time.</small>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Newsletter</h5>
              <p>
                Signup for our newsletter to get the latest news in your inbox.
              </p>
              <form
                action="blank.php"
                className="row form-dark"
                id="form_subscribe"
                method="post"
                name="form_subscribe"
              >
                <div className="col text-center">
                  <input
                    className="form-control"
                    id="txt_subscribe"
                    name="txt_subscribe"
                    placeholder="enter your email"
                    type="text"
                  />
                  <Link to="#" className="no-cursor" id="btn-subscribe">
                    <i className="arrow_right bg-color-secondary"></i>
                  </Link>
                  <div className="clearfix"></div>
                </div>
              </form>
              <div className="spacer-10"></div>
              <small>Your email is safe with us. We don't spam.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex footer__wrapper">
                <div className="de-flex-col">
                  <Link className="footer__link" to="/">
                    <img alt="" className="f-logo" src={Logo} />
                    <span className="copy">&copy; Copyright 2024 by Infomania</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
