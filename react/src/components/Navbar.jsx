import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div id='page-top' data-spy='scroll' data-target='.navbar-fixed-top' />

      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              <span className='sr-only'>Toggle navigation</span>{" "}
              <span className='icon-bar'></span>{" "}
              <span className='icon-bar'></span>{" "}
              <span className='icon-bar'></span>{" "}
            </button>

            <a
              className='navbar-brand page-scroll'
              onClick={() => scroll.scrollToTop()}
            >
              Mod Livin' RTY
            </a>

            <div className='phone'>
              <span>Call Today</span>888-123-4321
            </div>
          </div>
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link
                  to='about'
                  className='page-scroll'
                  smooth={true}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='services'
                  className='page-scroll'
                  smooth={true}
                  duration={1000}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='portfolio'
                  className='page-scroll'
                  smooth={true}
                  duration={1000}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='testimonials'
                  className='page-scroll'
                  smooth={true}
                  duration={1000}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to='contact'
                  className='page-scroll'
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
