import { useState } from 'react';
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
                                    <img src={tab.titleicon} />
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
                                            <img src={tab.fimage} className={styles['first-img']} />
                                            <div className={styles['second-img']}>
                                                <img src={tab.simage} />
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