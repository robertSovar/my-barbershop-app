import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerSection}>
        <span>
          ©2024 Copyright <strong>Alex the barber</strong> | All rights
          reserved.
        </span>

        <span className={styles.footerSpan}>
          made by{" "}
          <a
            href="https://www.linkedin.com/in/robert-sovar/"
            rel="nofollow"
            target="_blank"
            className={styles.footerATag}
          >
            Sovar Robert Ionut
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
