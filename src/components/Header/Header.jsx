import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.container}>
      <p className={styles.logoContainer}>
        <Link to="/home" className={styles.logo}>
          <img src={logo} alt="My app logo" />
        </Link>
      </p>
      <nav className={styles.navBar}>
        <Link to="/home" className={styles.link}>
          Home
        </Link>

        <Link to={"/about"} className={styles.link}>
          Despre
        </Link>

        <Link to="/gallery" className={styles.link}>
          Galerie
        </Link>

        <Link to="/appointments" className={styles.link}>
          Programari
        </Link>

        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
