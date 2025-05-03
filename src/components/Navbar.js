import { Link } from 'react-router-dom';
import logo from '../images/24rocketslogo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" 
         style={{
           background: 'rgba(255, 255, 255, 0.9)',
           backdropFilter: 'blur(10px)',
           margin: '1rem',
           borderRadius: '15px',
           boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
         }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-dark d-flex align-items-center" to="/">
          <img src={logo} alt="24 Rockets Logo" style={{ height: '30px', marginRight: '10px' }} />
          24 ROCKETS
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/solutions">Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/research">Research</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;