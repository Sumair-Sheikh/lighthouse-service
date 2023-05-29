import React from 'react'
import InnerBanner from '../InnerBanner/InnerBanner'
import Services from '../Services/Services'
import FooterContact from '../FooterContact/FooterContact'

function Main() {
    return (
        <>
            <InnerBanner
                backgroundimage="/images/services-banner.png"
                title="Our Services"
            />
            <Services />
            <FooterContact />
        </>
    )
}

export default Main