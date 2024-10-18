import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/guide">Guide</Link></li>
        <li><Link to="/hunt">Hunt</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/resource">Resource</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
