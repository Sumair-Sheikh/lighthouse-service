import React, { Fragment } from 'react'
import styles from './Services.module.css'
import { tabsData } from '@/utils/tabs.data';

function Services() {
    return (
        <Fragment>
            <section className={styles['main-services']}>
                <div className='container'>

                    {tabsData.map((list, index) => {

                        return (
                            <div
                                key={list.id}
                                className={`row ${styles['row']}`}>

                                <div className="col-md-6">

                                    <div className={styles['content_service']}>
                                        <h1 className={styles['title']}>
                                            {list.title}
                                        </h1>

                                        <div className={styles['content-p']}>
                                            {list.content}
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6">

                                    <div className={styles['icon-box']}>
                                        <img src={list.titleicon} alt="" />
                                    </div>

                                    <div className={styles['image-col']}>
                                        <img src={list.fimage} className={styles['first-img']} />
                                    </div>

                                </div>


                            </div>
                        );

                    })}

                </div>
            </section>
        </Fragment>
    )
}

export default Services