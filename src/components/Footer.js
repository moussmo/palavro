import React from "react";
import * as styles from "../styles/components/footer.module.scss";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>© {new Date().getFullYear()} Palavro </p>
        <nav className={styles.nav}>
          <Link to="/info">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
