import Link from 'next/link';
import styles from '../HomeAbout/HomeAbout.module.css'
import HeadingLeft from '@/components/HeadingLeft/HeadingLeft';


function HomeAbout() {
    return (
        <section className={styles['habout-sec']}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={styles['left-col']}>
                            
                            <HeadingLeft toptitle="About" bottomtitle="Lighthouse Services" />

                            <div className={styles['content']}>
                                <p>Headquartered in Crestview, Florida, Lighthouse Services is a full-service sign company in USA. We are a woman-owned business, proudly serving the Florida Panhandle and surrounding communities since 2002. Lighthouse Services is a state-licensed electrical sign contractor. We specialize in providing custom sign solutions that help businesses stand out and thrive.</p>
                                <p>At Lighthouse Services, we believe that your success is our success. That’s why we go above and beyond to ensure you get the best value for your investment. We offer a comprehensive range of sign services, from indoor and outdoor signs to vehicle graphics, banners, tradeshow signs & displays, window decals, and more. All our signs can be custom-made to meet your specific needs.</p>
                            </div>
                            <div className={styles['btns-cus']}>
                                <Link href="/about-us">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles['about-light-img']}>
                        <img src="/images/IMage-min-1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout;