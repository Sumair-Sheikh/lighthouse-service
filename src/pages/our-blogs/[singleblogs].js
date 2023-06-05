import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Image from 'next/image'
import style from '../../styles/ourblogs.module.css'
import { blogList } from '@/utils/blogs.data';
import FooterContact from '@/components/FooterContact/FooterContact';


function SingleBlog() {
    const router = useRouter()

    const [blogDetails, setBlogsDetails] = useState({})

    useEffect(() => {

        if (router.query?.singleblogs) {

            setBlogsDetails(blogList.find((blog) => blog.id == router.query?.singleblogs))
        }

    }, [router.query?.singleblogs])

    return (
        <>
            <InnerBanner
                backgroundimage="/images/blogs-banner.png"
                title="Our Blogs"
            />


            <section className={style['single-blog-top']}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={style['blog-pic1']}>
                                <Image
                                className={style['item-slick1']}
                                    src={blogDetails?.image}
                                    alt=""
                                    width={1261}
                                    height={481}
                                    loading='lazy'
                                />
                                <div className={style['blog-date']}>
                                    <span>{blogDetails?.title}</span>
                                    <span className={style['post-date']}>{blogDetails?.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style['blog-item2']}>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className={style['blog-detail1']}>
                                    <h2>{blogDetails?.heading}</h2>
                                </div>

                                <div className={style['blog-detail-para']}>
                                    <p>{blogDetails?.fullcontent}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <FooterContact />


        </>
    )
}

export default SingleBlog