import Link from 'next/link';
import { Fragment, useState } from 'react';
import styles from './Tabs.module.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Fragment>
      <ul className={`${styles['nav']} ${styles['nav-tabs']}`}>

        <div className={styles['li-box']}>
          <li
            className={`tab ${activeTab === 0 ? `${styles['active']}` : ''}`}
            onClick={() => handleTabClick(0)}
          >
            <div className={styles['icon-box']}>
              <img src="/images/worker.png" />
            </div>
            <span className={styles['title']}>Installation</span>
          </li>
        </div>

        <div className={styles['li-box']}>
          <li
            className={`tab ${activeTab === 1 ? `${styles['active']}` : ''}`}
            onClick={() => handleTabClick(1)}
          >
            <div className={styles['icon-box']}>
              <img src="/images/tools.png" />
            </div>
            <span className={styles['title']}>Maintenance</span>
          </li>
        </div>

        <div className={styles['li-box']}>
          <li
            className={`tab ${activeTab === 2 ? `${styles['active']}` : ''}`}
            onClick={() => handleTabClick(2)}
          >
            <div className={styles['icon-box']}>
              <img src="/images/scan.png" />
            </div>
            <span className={styles['title']}>TSign Permitting & Site Survey Services</span>
          </li>
        </div>

        <div className={styles['li-box']}>
          <li
            className={`tab ${activeTab === 3 ? `${styles['active']}` : ''}`}
            onClick={() => handleTabClick(3)}
          >
            <div className={styles['icon-box']}>
              <img src="/images/Construction-Plan.png" />
            </div>
            <span className={styles['title']}>Lighted Signs, LED Signs, And Sign Monuments</span>
          </li>
        </div>

        <div className={styles['li-box']}>
          <li
            className={`tab ${activeTab === 4 ? `${styles['active']}` : ''}`}
            onClick={() => handleTabClick(4)}
          >
            <div className={styles['icon-box']}>
              <img src="/images/blueprint.png" />
            </div>
            <span className={styles['title']}>Sign Design & Assist</span>
          </li>
        </div>

      </ul>

      <div className="tab-content">

        {activeTab === 0 &&

          <div className={styles['tab-pane']}>
            <div className='contanier'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles['image-col']}>
                    <img src="/images/services1.png" className={styles['first-img']} />
                    <div className={styles['second-img']}>
                      <img src="/images/2-min.jpg" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>

                  <div className={styles['content_service']}>
                    <h3 className={styles['title']}>Installation</h3>
                    <div className={styles['content-p']}>
                      <p>At <strong>Lighthouse Services</strong>, we understand that proper installation is crucial to the success of any sign project. That’s why we offer comprehensive installation services. We ensure that your signs are assembled safely, efficiently, and to your specifications. Our team has experience and skills in working with various sign types and materials. They have the tools and knowledge to install your signs to the highest standards. We take pride in our attention to detail and commitment to quality and strive to make the installation process as hassle-free as possible for our customers. </p>
                      <p>Connect with us for more details on our installation services and how we can help you bring your sign project to life!</p>
                    </div>
                    <div className={styles['btns-cus']}>
                      <Link href="/our-services">Read More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }

        {activeTab === 1 &&
          <div className={styles['tab-pane']}>
            <div className='contanier'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles['image-col']}>
                    <img src="/images/services2.png" className={styles['first-img']} />
                    <div className={styles['second-img']}>
                      <img src="/images/2-min.jpg" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>

                  <div className={styles['content_service']}>
                    <h3 className={styles['title']}>Maintenance</h3>
                    <div className={styles['content-p']}>
                    <p>At <strong>Lighthouse Services</strong>, we know that regular maintenance is necessary to keep your signs looking fantastic and operating as they should. That’s why we provide maintenance services in order to keep your signs in top shape at all times. Burnt-out bulbs, frayed wires, and weather damage are all issues that commonly affect signage, and our experienced team is skilled at identifying and fixing them. We also offer regular cleaning and touch-up services to ensure your signs always look their best. With our maintenance services, you can have peace of mind knowing that your signs are being cared for by a company committed to delivering exceptional quality and service.</p>
                    <p>Connect with us for more details on our maintenance services and how we can help you protect your investment!</p>
                    </div>
                    <div className={styles['btns-cus']}>
                      <Link href="/our-services">Read More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }

        {activeTab === 2 &&
          <div className={styles['tab-pane']}>
            <div className='contanier'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles['image-col']}>
                    <img src="/images/services3.png" className={styles['first-img']} />
                    <div className={styles['second-img']}>
                      <img src="/images/2-min.jpg" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>

                  <div className={styles['content_service']}>
                    <h3 className={styles['title']}>Sign Permitting & Site Survey Services</h3>
                    <div className={styles['content-p']}>
                    <p>At <strong>Lighthouse Services</strong>, we know how challenging it can be to go through the sign-permitting procedure. That’s why we offer comprehensive sign-permitting services. We help ensure that your sign project complies with all local regulations and restrictions. Our skilled team can help you with everything. From preparing the necessary documents and plans to submit the permit application. We handle everything throughout the navigating approval process. We also offer site survey services to ensure your sign is installed in the best possible location. We take into account factors such as visibility, accessibility, and local zoning requirements. </p>
                    <p>Connect with us for more details on our sign permitting and site survey services.</p>
                    </div>
                    <div className={styles['btns-cus']}>
                      <Link href="/our-services">Read More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }

        {activeTab === 3 &&
          <div className={styles['tab-pane']}>
            <div className='contanier'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles['image-col']}>
                    <img src="/images/services4.png" className={styles['first-img']} />
                    <div className={styles['second-img']}>
                      <img src="/images/2-min.jpg" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>

                  <div className={styles['content_service']}>
                    <h3 className={styles['title']}>Lighted Signs, LED Signs, And Sign Monuments</h3>
                    <div className={styles['content-p']}>
                    <p>At <strong>Lighthouse Services</strong>, we specialize in creating custom lighted signs, LED signs, and sign monuments. Our designers and technicians use the latest tech and highest-quality materials to create signs that are both visually stunning and long-lasting. Whether you need an illuminated storefront sign, an attention-grabbing LED message board, or a durable monument sign to welcome visitors to your property, we have got you! We help your business stand out and make a lasting impression through our signage solution.</p>
                    <p>We can create a custom solution that meets your specific needs and budget. From design and fabrication to installation and maintenance, we are your full-service sign center for all your lighted, LED, and monument sign needs.</p>
                    </div>
                    <div className={styles['btns-cus']}>
                      <Link href="/our-services">Read More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }

        {activeTab === 4 &&
          <div className={styles['tab-pane']}>
            <div className='contanier'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles['image-col']}>
                    <img src="/images/services5.png" className={styles['first-img']} />
                    <div className={styles['second-img']}>
                      <img src="/images/2-min.jpg" />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>

                  <div className={styles['content_service']}>
                    <h3 className={styles['title']}>Sign Design & Assist</h3>
                    <div className={styles['content-p']}>
                    <p><strong>Lighthouse Services</strong> helps you create the perfect custom sign for your business. Our team of designers works closely with you to understand your brand and design preferences. They take note of any specific requirements or restrictions for your sign. We use the latest design software and techniques to create a digital rendering of your sign. We also offer sign assist services to help you navigate the sometimes-complex sign-permitting process. </p>
                    <p>When you use our sign design and assistance services, you can be sure your personalized sign will be expertly designed, fabricated, and installed with the utmost care and attention to detail.</p>
                    </div>
                    <div className={styles['btns-cus']}>
                      <Link href="/our-services">Read More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        }

      </div>

    </Fragment>
  );
};

export default Tabs;
