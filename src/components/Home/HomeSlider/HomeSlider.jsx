import Image from "next/image";
import { Fragment } from "react";
import React from "react";
import Slider from "react-slick";
import styles from './HomeSlider.module.css'
import SocialIcon from "@/components/Social-icon/SocialIcon";



function HomeSlider() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slideList = [
        {
            backgroundImage: '/images/home-banner.jpg',
            heading: "Affordable Digital Signage",
            subHeading: "That Makes a Lasting Impression",
        },
        {
            backgroundImage: '/images/home-banner.jpg',
            heading: "Your Premier Sign",
            subHeading: "Company in Northwest Florida!",
        },
        {
            backgroundImage: '/images/home-banner.jpg',
            heading: "Custom Sign Solutions",
            subHeading: "For Your Unique Business Needs",
        },
    ]

    return (
        <Fragment>
            <section className={styles['home-slider-sec']}>
                <div className="container">


                    <Slider {...settings}>

                        {slideList.map((list, index) => {
                            return (
                                <div key={index}>

                                    <div className={styles['home-bannner-slider']} style={{ backgroundImage: `url("${list.backgroundImage}")` }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className={styles['title']}>
                                                        <h2 className={styles['post_title']}>{list.heading}</h2>
                                                    </div>
                                                    <div className={styles['sub-div']}> <h4 className={styles['sub_title']}>{list.subHeading}</h4></div>
                                                    <div className={styles['services-btn']}>
                                                        <a href="#"><span className={styles['single-btn']}>Click Here</span></a>
                                                    </div>
                                                </div>

                                                <div className="col-md-4"></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}


                    </Slider>

                    <div className={styles['social-icon-header']}>
                        <SocialIcon />
                    </div>

                </div>
            </section>

        </Fragment>

    )
}

export default HomeSlider;