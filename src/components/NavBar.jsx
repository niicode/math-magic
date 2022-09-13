import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <h2>Math Magicians</h2>
    <div className="navbar-menu" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/quotes">
            Quotes
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
