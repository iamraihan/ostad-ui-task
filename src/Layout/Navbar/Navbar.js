import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo ostad.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
