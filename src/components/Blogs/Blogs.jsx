import React, { Fragment } from 'react'
import { blogList } from '@/utils/blogs.data';
import { FaChevronRight } from "react-icons/fa";
import styles from './Blogs.module.css'
import HeadingCenter from '../HeadingCenter/HeadingCenter';
import { useRouter } from 'next/router';

function Blogs() {
    
    const router = useRouter()
    const pathName = router.pathname
    const handleChangePost = (e, id) => {
        e.stopPropagation()
        router.push(`${pathName}/${id}`)
    }
    return (
        <Fragment>
            <section>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <HeadingCenter
                                toptitle="Our Latest"
                                bottomtitle="News & Blogs"
                            />
                            <div className={styles['content']}>
                                <p>Follow our latest blogs on signage solutions to stay up-to-date on industry trends, best practices, and inspiration for your next sign project.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles['main-blogs']}>
                        <div className='row'>

                            {blogList.map((list, index) => {
                                return (
                                    <div key={index} className='col-md-4'>

                                        <div className={styles['Articles-page']}>
                                            <div className={styles['own-main-container']}>

                                                <div className={styles['blog-img']}>
                                                    <img src={list.image} />


                                                    <div className={styles['date-location']}>

                                                        <p className={styles['workplace']}>

                                                            {list.title}

                                                        </p>
                                                        <p className={styles['get_data']}>

                                                            {list.date}

                                                        </p>

                                                    </div>
                                                </div>

                                                <div className={styles['own-desc-main']}>

                                                    <h5 className={styles['own-title']}>

                                                        {list.heading}

                                                    </h5>

                                                    <div className={styles['own-desc']}>

                                                        {list.shortcontent}

                                                    </div>

                                                    <a onClick={(e) => handleChangePost(e, list.id)} className={styles['own-btn']}><FaChevronRight /></a>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Blogs