import HeadingCenter from '../HeadingCenter/HeadingCenter';
import styles from './BlogsSlider.module.css'
import React, { Fragment } from 'react'
import Slider from "react-slick";
import { blogList } from '@/utils/blogs.data';
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from 'next/router';


function BlogsSlider() {

    const router = useRouter()
    console.log(router, "router")
    const pathName = router.pathname
    const handleChangePost = (e, id) => {
        e.stopPropagation()
        router.push(`${pathName}/our-blogs/${id}`)
    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <Fragment>
            <section className={styles['blogs-slider-sec']}>
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

                            <div className={styles['articles-page-slider']}>


                                <Slider {...settings}>

                                    {blogList.map((list, index) => {
                                        return (
                                            <div key={index}>

                                                <div className={styles['Articles-page']}>
                                                    <div className={styles['own-main-container']}>

                                                        <img src={list.image} />

                                                        <div className={styles['date-location']}>

                                                            <p className={styles['workplace']}>

                                                                {list.title}

                                                            </p>
                                                            <p className={styles['get_data']}>

                                                                {list.date}

                                                            </p>

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


                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default BlogsSlider