import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./FooterContact.module.css";
import HeadingLeft from "../HeadingLeft/HeadingLeft";
import FooterFoam from "../FooterFoam/FooterFoam";

function FooterContact(props) {
  return (
    <Fragment>
      <section className={styles["footer-contact"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["left"]}>
                <Image
                  src={props.fimage || "/images/contact-image.png"}
                  alt=""
                  width={566}
                  height={588}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles["right"]}>
                <HeadingLeft toptitle="Want" bottomtitle="To know more?" />

                <div className={styles["content"]}>
                  <p>
                    Contact us & learn more about our sign services. We’ll do
                    our best to help you achieve your goals!
                  </p>
                </div>

                <div className={styles["footer-foam"]}>
                  <FooterFoam />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default FooterContact;
