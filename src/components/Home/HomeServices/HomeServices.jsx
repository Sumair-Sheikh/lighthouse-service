import Tabs from '@/components/Tabs/Tabs'
import styles from './HomeServices.module.css'
import React, { useState } from 'react'
import { tabsData } from '@/utils/tabs.data';
import DynamicTabs from '@/components/DynamicTabs/DynamicTabs'
import HeadingCenter from '@/components/HeadingCenter/HeadingCenter';

function HomeServices() {

    const [activeTab, setActiveTab] = useState(0);


    return (
        <section className={styles['home-we-ofer']}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <HeadingCenter toptitle="Services" bottomtitle="We Offer" />
                        <div className={styles['content']}>
                            <p>Lighthouse Services is a full-service sign company specializing in sign design, sign permitting, site survey services, lighted signs, LED signs, and sign monuments. We offer a full range of services, such as installation, maintenance, and custom sign solutions for businesses of all sizes.</p>
                        </div>

                        <div className={styles['tabs-sect']}>
                            <div id={styles['tab']}>
                                {/* <Tabs /> */}
                                <DynamicTabs tabsData={tabsData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeServices