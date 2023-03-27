import React from "react";

const About = () => {
  return (
    <div>
      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              {" "}
              <img src='img/about.jpg' className='img-responsive' alt='' />{" "}
            </div>
            <div className='col-xs-12 col-md-6'>
              <div className='about-text'>
                <h2>Who We Are</h2>
                <p>
                Welcome to our company, a reputable real estate flipping 
                and fixing company dedicated to transforming properties into beautiful and functional spaces.
                We specialize in identifying undervalued properties, renovating them to the highest standards, 
                and selling them at a profit.

                Our team of skilled professionals has years of experience in the real estate industry 
                and is committed to excellence in every aspect of our work. 
                We take a hands-on approach to each project, working closely with our clients to understand their vision and bring it to life. 
                From design and construction to marketing and sales, we manage every aspect of the process to ensure that our clients receive exceptional results
                </p>
                <h3>Why Choose Us?</h3>
                <div className='list-style'>
                  <div className='col-lg-6 col-sm-6 col-xs-12'>
                    <ul>
                      <li>Years of Experience</li>
                      <li>Fully Insured</li>
                      <li>Cost Control Experts</li>
                      <li>100% Satisfaction Guarantee</li>
                    </ul>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-xs-12'>
                    <ul>
                      <li>Free Consultation</li>
                      <li>Satisfied Customers</li>
                      <li>Project Management</li>
                      <li>Affordable Pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
