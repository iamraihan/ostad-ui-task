import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo ostad.png";
import flag from "../../assets/images/english-flag.png";
import downArrow from "../../assets/images/down-arrow.svg";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-item-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div>
          <ul className="menu-list">
            <NavLink className="nav-link">
              <li className="menu-item text-dark">
                সেট ইয়োর গোল{" "}
                <span>
                  <img src={downArrow} alt="" />
                </span>
              </li>
            </NavLink>
            <NavLink className="nav-link">
              <li className="menu-item text-dark">আপকামিং লাইভ ব্যাচ</li>
            </NavLink>
            <NavLink className="nav-link">
              <li className="language-wrapper">
                <img src={flag} alt={flag} />
                <p
                  style={{ marginLeft: "8px" }}
                  className="menu-item text-dark"
                >
                  ENGLISH
                </p>
              </li>
            </NavLink>
            <NavLink className="nav-link">
              <li>
                <button className="btn login-btn">Login</button>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
