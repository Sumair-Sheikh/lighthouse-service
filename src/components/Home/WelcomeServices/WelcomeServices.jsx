import React, { Fragment } from 'react'
import styles from '../WelcomeServices/WelcomeServices.module.css'
import HeadingCenter from '@/components/HeadingCenter/HeadingCenter';
import WelcomeBox from '@/components/WelcomeBox/WelcomeBox';

function WelcomeServices() {
    return (
        <Fragment>
            <section className={styles['welcome-sec']}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            
                            <HeadingCenter toptitle="Welcome To" bottomtitle="Lighthouse Services" />

                            <div className={styles['content']}>
                                <p>At <b>Lighthouse Services</b>, we are steadfast in delivering high-quality signs. We understand &amp; recognize that no two businesses are alike. That’s why we offer personalized sign solutions tailored to your specific needs. We commit to meeting our customer’s needs, approaching each sign with creativity, ingenuity, enthusiasm, and integrity.</p>
                                <p>From concept to installation, we work with you every step of the way &amp; ensure that your signs reflect your brand and message. Whether you need signs to advertise your products or services or simply to provide information to your customers, we’ve got you covered.</p>
                            </div>
                        </div>
                    </div>

                    <WelcomeBox />

                </div>
            </section>
        </Fragment>
    )
}

export default WelcomeServices;