import React, { Fragment } from 'react'
import Image from 'next/image'
import styles from './WelcomeBox.module.css'

function WelcomeBox() {
    return (
        <Fragment>
            <div className={styles['welcome-box']}>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className={styles['main-mission']}>
                            <div className={styles['mission-inner']}>
                                <div className={styles['img-title']}>
                                    <span>
                                        <Image
                                            src="/images/Vector-1.png"
                                            alt=""
                                            width={35}
                                            height={23}
                                            loading='lazy'
                                        />
                                    </span>
                                    <h4 className={styles['title']}>Our Vision</h4>
                                </div>
                                <div className={styles['content-sec']}>
                                    <p>Our set goal is to be the premier provider of custom sign solutions in Northwest Florida and to see our customers flourish. We believe that your success is our success.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={styles['main-mission']}>
                            <div className={styles['mission-inner']}>
                                <div className={styles['img-title']}>
                                    <span>
                                    <Image
                                            src="/images/Vector.png"
                                            alt=""
                                            width={35}
                                            height={23}
                                            loading='lazy'
                                        />
                                    </span>
                                    <h4 className={styles['title']}>Our Mission</h4>
                                </div>
                                <div className={styles['content-sec']}>
                                    <p>Our mission is to illuminate the way for our customers, employees, and community by delivering innovative sign solutions, exceptional quality, and superior service.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={styles['main-mission']}>
                            <div className={styles['mission-inner']}>
                                <div className={styles['img-title']}>
                                    <span>
                                    <Image
                                            src="/images/Vector-1.png"
                                            alt=""
                                            width={35}
                                            height={23}
                                            loading='lazy'
                                        />
                                    </span>
                                    <h4 className={styles['title']}>Our Values</h4>
                                </div>
                                <div className={styles['content-sec']}>
                                    <p>We value both our customers & employees. We aim to set the standard for excellence in our industry and to be a shining example of a quality sign solutions company.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WelcomeBox