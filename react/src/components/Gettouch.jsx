import React from "react";
import { Link } from "react-scroll";

const Gettouch = () => {
  return (
    <>
      <div id='get-touch'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6 col-md-offset-1'>
              <h3>Cost for your home renovation project</h3>
              <p>
                Get started today and complete our form to request your free
                estimate
              </p>
            </div>
            <div className='col-xs-12 col-md-4 text-center'>
              <Link
                to='contact'
                className='btn btn-custom btn-lg page-scroll'
                smooth={true}
                duration={1000}
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gettouch;
