import React, { Fragment } from 'react'
import styles from './About.module.css'
import HeadingLeft from '../HeadingLeft/HeadingLeft'
import WelcomeBox from '../WelcomeBox/WelcomeBox'

function About() {
  return (
    <Fragment>
        <section className={styles['about-sec1']}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={styles['left-col']}>
                            
                            <HeadingLeft toptitle="About" bottomtitle="Lighthouse Services" />

                            <div className={styles['content']}>
                                <p>Headquartered in Crestview, Florida, <strong>Lighthouse Services</strong> is a full-service sign company in USA. We are a woman-owned business, proudly serving the Florida Panhandle and surrounding communities since 2002. <strong>Lighthouse Services </strong> is a state-licensed electrical sign contractor. We specialize in providing custom sign solutions that help businesses stand out and thrive.</p>
                                <p>At <strong>Lighthouse Services</strong> , we believe that your success is our success. That’s why we go above and beyond to ensure you get the best value for your investment. We offer a comprehensive range of sign services, from indoor and outdoor signs to vehicle graphics, banners, tradeshow signs &amp; displays, window decals, and more. All our signs can be custom-made to meet your specific needs.</p>
                                <p>We aspire to be a company that meets &amp; exceeds customers’ expectations and that our employees are proud to be a part of. We’ll make every effort to ensure our customer’s needs are met and that they are delighted. By continuously striving to improve and innovate, we aim to be your go-to sign solutions company in Florida, United States.</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles['about-light-img']}>
                        <img src="/images/IMage-min-1.jpg" />
                        </div>
                    </div>
                </div>

                <WelcomeBox />
                
            </div>
        </section>
    </Fragment>
  )
}

export default About