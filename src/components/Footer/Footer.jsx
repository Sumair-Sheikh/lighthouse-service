import React, { Fragment } from 'react'
import Image from 'next/image'
import styles from '../Footer/Footer.module.css'
import SocialIcon from '../Social-icon/SocialIcon';
import Navbar from '../Navbar/Navbar';

function Footer() {

  return (

    <Fragment>

      <footer id={styles['colophon']} classNameName={styles['site-footer']}>
        <div className={styles['footer']}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className={styles['footer-logo']}>
                  <a href="/">
                    <Image
                      src="/images/Logo-1.png"
                      alt="Vercel Logo"
                      width={318}
                      height={318}
                      priority
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={styles['footer2']}>
                  <h3>Navigation</h3>
                  <div className={styles['menu-menu-1-container']}>
                    <ul id="menu-menu-1" className={styles['footer-menu']}>
                      <Navbar />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles['footer4']}>
                  <h3>Contact Us</h3>
                  <ul className={styles['footer-contact-info']}>
                    <li><span className={styles['socail-footer']}>Phone:</span>
                      <a href="tel:123(4567)890"> 123(4567)890</a>

                    </li>
                    <li><span className={styles['socail-footer']}>Email:</span>
                      <a href="mailto:info@lighthouse@gmail.com">info@lighthouse@gmail.com</a>

                    </li>
                    <li><span className={styles['socail-footer']}>Address:</span>
                      <a href="https://goo.gl/maps/oHERaj7mUFb1KemL8" target="_blank">    Abc,street, 009 Atlanta, GA </a>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['copyrights']}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <p className={styles['copyright']}>© Copyright  2023 <a href="/" className={styles['fot-a']}>Lighthouse Services</a> All Rights Reserved. Designed &amp; Developed By Dallas Web Design Company <a href="https://www.appverticals.com/" target="_blank" className={styles['fot-a']}>App Verticals </a></p>
              </div>
              <div className="col-lg-2">
                <div className={styles['social-icon-footer']}>
                  <SocialIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </Fragment>

  )

}

export default Footer;
