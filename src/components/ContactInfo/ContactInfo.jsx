import React, { Fragment } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from './ContactInfo.module.css'

function ContactInfo() {
    return (
        <Fragment>
            <section className={styles['contact-detail']}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={styles['contact-info']}>

                                <div className={styles['info-wrapper']}>
                                    <div className={styles['info-inner-wrapper']}>
                                        <div className={styles['icon']}>
                                            <FaPhoneAlt />
                                        </div>
                                        <div className={styles['txt']}>
                                            <h3>Phone</h3>
                                            <a href="tel:1234567890">123 (4567) 890</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles['info-wrapper']}>
                                    <div className={styles['info-inner-wrapper']}>
                                        <div className={styles['icon']}>
                                            <FaEnvelope />
                                        </div>
                                        <div className={styles['txt']}>
                                            <h3>Email</h3>
                                            <a href="mailto:info@lighthouse@gmail.com">info@lighthouse@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles['info-wrapper']}>
                                    <div className={styles['info-inner-wrapper']}>
                                        <div className={styles['icon']}>
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className={styles['txt']}>
                                            <h3>Address</h3>
                                            <a href="https://goo.gl/maps/Dq2pnHRshonFXomj9" target="_blank">abc,street, 009 Atlanta, GA</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default ContactInfo