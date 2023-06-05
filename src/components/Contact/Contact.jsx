import React, { Fragment } from 'react'
import Image from 'next/image'
import styles from './Contact.module.css'
import HeadingLeft from '../HeadingLeft/HeadingLeft'
import ContactFoam from '../ContactFoam/ContactFoam'

function Contact() {
    return (
        <Fragment>

            <section className={styles['footer-contact']}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-6'>

                            <div className={styles['left']}>

                                <Image
                                    src="/images/Images-and-shapes-min.png"
                                    alt=""
                                    width={566}
                                    height={588}
                                    loading='lazy'
                                />
                                
                            </div>

                        </div>

                        <div className='col-md-6'>

                            <div className={styles['right']}>

                                <HeadingLeft
                                    toptitle="Want"
                                    bottomtitle="To know more?"
                                />

                                {/* <div className={styles['content']}>
                                    <p>Contact us & learn more about our sign services. We’ll do our best to help you achieve your goals!</p>
                                </div> */}

                                <div className={styles['footer-foam']}>

                                    <ContactFoam />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </Fragment>
    )
}

export default Contact