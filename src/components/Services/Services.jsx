import React, { Fragment } from 'react'
import Image from 'next/image'
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
                                        <Image
                                            src={list.titleicon}
                                            alt=""
                                            width={54}
                                            height={54}
                                            loading='lazy'
                                        />
                                    </div>

                                    <div className={styles['image-col']}>
                                        <Image
                                            className={styles['first-img']}
                                            src={list.fimage}
                                            alt=""
                                            width={566}
                                            height={588}
                                            loading='lazy'
                                        />
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