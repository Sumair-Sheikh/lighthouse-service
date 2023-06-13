import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../Footer/Footer.module.css";
import SocialIcon from "../Social-icon/SocialIcon";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

function Footer() {
  return (
    <Fragment>
      <footer id={styles["colophon"]} className={styles["site-footer"]}>
        <div className={styles["footer"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles["footer-logo"]}>
                  <Link href="/">
                    <Image
                      src="/images/Logo-1.png"
                      alt="Vercel Logo"
                      width={318}
                      height={318}
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={styles["footer2"]}>
                  <h3>Navigation</h3>
                  <div className={styles["menu-menu-1-container"]}>
                    <ul id="menu-menu-1" className={styles["footer-menu"]}>
                      <Navbar />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles["footer4"]}>
                  <h3>Contact Us</h3>
                  <ul className={styles["footer-contact-info"]}>
                    <li>
                      <span className={styles["socail-footer"]}>Phone:</span>
                      <Link href="tel:123(4567)890"> 123(4567)890</Link>
                    </li>
                    <li>
                      <span className={styles["socail-footer"]}>Email:</span>
                      <Link href="mailto:info@lighthouse@gmail.com">
                        info@lighthouse@gmail.com
                      </Link>
                    </li>
                    <li>
                      <span className={styles["socail-footer"]}>Address:</span>
                      <Link
                        href="https://goo.gl/maps/oHERaj7mUFb1KemL8"
                        target="_blank"
                      >
                        {" "}
                        Abc,street, 009 Atlanta, GA{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["copyrights"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <p className={styles["copyright"]}>
                  © Copyright 2023{" "}
                  <Link href="/" className={styles["fot-a"]}>
                    Lighthouse Services
                  </Link>{" "}
                  All Rights Reserved. Designed &amp; Developed By Dallas Web
                  Design Company{" "}
                  <Link
                    href="https://www.appverticals.com/"
                    target="_blank"
                    className={styles["fot-a"]}
                  >
                    App Verticals{" "}
                  </Link>
                </p>
              </div>
              <div className="col-lg-2">
                <div className={styles["social-icon-footer"]}>
                  <SocialIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
