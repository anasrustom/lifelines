import React from "react";
import Logo from "../images/LogoWith.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const openNav = () => {
    document.body.classList += "menu__open";
  };

  const closeNav = () => {
    document.body.classList.remove("menu__open");
  };

  return (
    <header className="transparent header-light scroll-light smaller">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  <div id="logo">
                    <Link to="/">
                      <img alt="" className="logo-2" src={Logo} />
                    </Link>
                  </div>
                </div>
                <div className="de-flex-col">
                  <input
                    id="quick_search"
                    className="xs-hide"
                    name="quick_search"
                    placeholder="search item here..."
                    type="text"
                  />
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li className="menu-item-has-children has-child">
                    <Link to="/explore">
                      News Hub<span></span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children has-child">
                    <Link to="/baj">
                      Become a Journalist<span></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="btn-main connect-wallet"
                      onClick={() =>
                        alert("This feature has not been implemented yet")
                      }
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>

                <div className="menu_side_area">
                  <span onClick={() => openNav()} id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul id="dropdown__wrapper">
        <li className="dropdown__list">
          <Link to="/explore" onClick={() => closeNav()}>
            News Hub
          </Link>
        </li>
        <li className="dropdown__list">
          <Link to="/" onClick={() => closeNav()}>
            Become a Journalist
          </Link>
        </li>
        <li className="close__button">
          <button onClick={() => closeNav()}>
            <FaTimes />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
