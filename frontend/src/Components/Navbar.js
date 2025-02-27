import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.brand}`} to="/">
          Josh Taylor Insurance
        </Link>
        <div className={`collapse navbar-collapse`} id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navLinks}`}>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navItem}`} to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navItem}`} to="/Demo">
                Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
