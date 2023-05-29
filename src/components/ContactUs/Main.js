import React from 'react'
import InnerBanner from '../InnerBanner/InnerBanner'
import Contact from '../Contact/Contact'
import ContactInfo from '../ContactInfo/ContactInfo'

function Main() {
    return (
        <>
            <InnerBanner
                backgroundimage="./images/contact-banner.png"
                title="Contact Us"
            />
            <Contact />
            <ContactInfo />
        </>
    )
}

export default Main