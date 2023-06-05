import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { tabsData } from '@/utils/tabs.data';
import styles from './DynamicTabs.module.css'

const DynamicTabs = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className={styles['tabs-sec']}>
                <ul className={`${styles['nav']} ${styles['nav-tabs']}`}>
                    {tabsData.map((tab) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={styles['li-box']}>

                            <li
                                key={tab.id}
                                className={`${styles['tab']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                                onClick={() => handleTabClick(tab.id)}
                            >

                                <div className={styles['icon-box']}>
                                    <Image
                                        src={tab.titleicon}
                                        alt=""
                                        width={54}
                                        height={54}
                                        loading='lazy'
                                    />
                                </div>
                                <span className={styles['title']}>{tab.title}</span>

                            </li>

                        </div>
                    ))}
                </ul>
            </div>
            <div className={styles['tab-content']}>
                {tabsData.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${styles['content']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                    >

                        <div className={styles['tab-pane']}>
                            <div className='contanier'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className={styles['image-col']}>
                                            <Image
                                                className={styles['first-img']}
                                                src={tab.fimage}
                                                alt=""
                                                width={566}
                                                height={550}
                                                loading='lazy'
                                            />
                                            <div className={styles['second-img']}>
                                                <Image
                                                    src={tab.simage}
                                                    alt=""
                                                    width={221}
                                                    height={215}
                                                    loading='lazy'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>

                                        <div className={styles['content_service']}>
                                            <h3 className={styles['title']}>{tab.title}</h3>
                                            <div className={styles['content-p']}>
                                                {tab.content}
                                                {/* <p>{tab.content2}</p> */}
                                            </div>
                                            <div className={styles['btns-cus']}>
                                                <Link href="/our-services">Read More</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicTabs;