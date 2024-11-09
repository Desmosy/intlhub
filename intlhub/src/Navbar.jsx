import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="game-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">INTLHUB</Link>
        <ul className="nav-menu">
          <li><Link to="/guide" className="nav-link">Guide</Link></li>
          <li><Link to="/hunt" className="nav-link">Hunt</Link></li>
          <li><Link to="/learn" className="nav-link">Learn</Link></li>
          <li><Link to="/resource" className="nav-link">Resource</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;