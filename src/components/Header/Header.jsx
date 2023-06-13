import React from "react";
import Image from "next/image";
import styles from "../Header/Header.module.css";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

function Header() {
  return (
    <header id={styles["masthead"]} className={styles["site-header"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles["site-branding"]}>
              <Link href="/" rel="noopener noreferrer">
                <Image
                  src="/images/Header-Logo.png"
                  alt="Vercel Logo"
                  //className={styles.custom-logo}
                  width={208}
                  height={202}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <nav
              id={styles["site-navigation"]}
              className={styles["main-navigation"]}
            >
              <ul
                id={styles["primary-menu"]}
                className={styles["menu nav-menu"]}
              >
                <Navbar />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
