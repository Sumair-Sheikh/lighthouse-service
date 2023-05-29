import React, { Fragment } from 'react'
import styles from './InnerBanner.module.css'
import SocialIcon from '../Social-icon/SocialIcon'

function InnerBanner(props) {
    return (
        <Fragment>
            <section className={styles['inner-banner']}>
                <div className='container'>
                    <div className='row'>
                        <div className={`'col-md-12' ${styles['inner-banner-col']}`} style={{ backgroundImage: `url("${props.backgroundimage}")` }}>

                            <h2>{props.title}</h2>

                            <div className={styles['social-icon-header']}>

                                <SocialIcon />

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default InnerBanner