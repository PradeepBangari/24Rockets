import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto fixed">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>24 ROCKETS</h5>
            <p className="small">Pioneering Mars mission solutions for a sustainable future.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p className="small">
              <Link> Email: 24rockets.mail@gmail.com</Link><br />
              Phone: +91 9900990099
            </p>
          </div>
          <div className="col-md-4">
            <h5>Address</h5>
            <p className="small">
              # Jigani<br />
              Bengaluru - 560105
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;