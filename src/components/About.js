import React from 'react';

function About() {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <h1 className="display-5 text-center mb-5 fw-bold">Building Mars' First Self-Sustainable City</h1>

          <div className="mb-5">
            <h2 className="h3 mb-4 text-primary">Our Vision</h2>
            <p className="lead">24 Rockets is pioneering the development of self-sustainable habitats for Mars colonization, focusing on innovative technologies that will make long-term Mars settlement possible.</p>
          </div>

          <div className="mb-5">
            <h2 className="h3 mb-4 text-primary">Technology Requirements</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Life Support Systems</h5>
                    <p className="card-text">Advanced air and water recycling, waste management, and atmospheric regulation systems.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Energy Solutions</h5>
                    <p className="card-text">Sustainable power generation through solar, nuclear, and innovative energy storage systems.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Resource Utilization</h5>
                    <p className="card-text">In-situ resource utilization technology for manufacturing and construction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="h3 mb-4 text-primary">Investment Opportunity</h2>
            <div className="bg-light p-4 rounded-3 shadow">
              <p>We're currently seeking strategic partners and investors for:</p>
              <ul className="list-unstyled">
                <li>✓ Research and Development</li>
                <li>✓ Prototype Development</li>
                <li>✓ Testing Facilities</li>
                <li>✓ Manufacturing Infrastructure</li>
              </ul>
              <p className="mb-0">Investment range: $10M - $50M</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="h3 mb-4 text-primary">Connect With Us</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <a href="mailto:24rockets.mail@gmail.com" className="btn btn-primary btn-lg shadow">Email Us</a>
              <a href="http://www.linkedin.com/in/24rockets" className="btn btn-outline-dark btn-lg shadow">LinkedIn</a>
              <a href="https://x.com/24__Rockets" className="btn btn-outline-dark btn-lg shadow">X</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
