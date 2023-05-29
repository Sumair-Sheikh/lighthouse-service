import React, { Fragment } from 'react'
import styles from './Expertise.module.css'
import HeadingCenter from '../HeadingCenter/HeadingCenter'

function Expertise() {
    return (
        <Fragment>
            <section className={styles['about-expertise']}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <HeadingCenter
                                toptitle="Expertise"
                                bottomtitle="You Can Count On"
                            />

                            <div className={styles['content']}>
                                <p>At <strong>Lighthouse Services</strong>, our team has professionals who know how to use modern tech and premium materials to construct finest signage art. we take pride in delivering innovative solutions, high-quality products, and superior service to our customers.</p>
                                <p>We specialize in sign design, permitting, installation, maintenance, and more, using the latest technology and techniques to bring your vision to life. With our experience and expertise, we’ve helped businesses of all sizes and industries stand out with eye-catching signs that make an impact.</p>
                                <p>Let us help you light up your business with signs that make a statement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Expertise