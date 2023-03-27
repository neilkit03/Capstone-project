import React from "react";

const services = () => {
  return (
    <>
      <div id='services'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Services</h2>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-1.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>New Home Construction</h3>
                <p>
                The first in our list of construction technology trends is 3D printing.
                 A little over a decade ago, 3D printing emerged as a possible remedy for disaster-stricken regions around the world. 
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-2.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Home Additions</h3>
                <p>
                If you’re like most people, you spend more time in your home than anywhere else. 
                So if there’s something about your home that isn’t quite right, it can become problematic. 
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-3.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Bathroom Remodels</h3>
                <p>
                  Is your home in need of a bathroom remodel? 
                  Give your bathroom design a boost with a little planning and our inspirational bathroom remodel ideas.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-4.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Kitchen Remodels</h3>
                <p>
                For avid cooks, seasoned hosts, and busy families alike, 
                the kitchen is the center of daily life—and a place where both beauty and function are more important than ever.
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-5.jpg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Windows & Doors</h3>
                <p>
                Surely, the infrastructural things like the beams, 
                bricks, and mortars, etc play a significant role, and obviously, 
                people take great care towards the same. 
                </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service-media'>
                {" "}
                <img src='img/services/service-6.jpeg' alt=' ' />{" "}
              </div>
              <div className='service-desc'>
                <h3>Decks & Porches</h3>
                <p>
                Modern building codes pay a lot of attention to critical details
                 such as ledgers and railings, but codes are not always consistently enforced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
