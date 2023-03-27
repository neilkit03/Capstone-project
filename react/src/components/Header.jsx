import React from "react";
import { Link } from "react-scroll";
import "../views/Admin.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Home Construction
                    <br />
                    Flip & Fix
                  </h1>
                  <Link
                    to="about"
                    id="learn"
                    className="btn btn-custom btn-lg page-scroll"
                    smooth={true}
                    duration={1000}
                  >
                    Learn More
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
