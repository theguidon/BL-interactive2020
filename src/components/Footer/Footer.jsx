import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.svg"
import styles from "./Footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Link to="/">
        <Logo />
        {/* <img src={logo} alt="logo" /> */}
      </Link>
      <div className={styles.details}>
        <p>ABOUT THE INTERACTIVE</p>
        <p>An immersive journalism project by The GUIDON in 2020</p>
        <p>
          Interactive by Bea Martin, Bea Sison, Cobbie Quintos, Giddy Garcia,
          and Harvey Sison
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
