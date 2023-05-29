import React from 'react'
import InnerBanner from '../InnerBanner/InnerBanner'
import About from '../About/About'
import Expertise from '../Expertise/Expertise'
import FooterContact from '../FooterContact/FooterContact'

function Main() {
    return (
        <>
            <InnerBanner
                backgroundimage="/images/about-banner.png"
                title="About Us"
            />
            <About />
            <Expertise />
            <FooterContact />
        </>
    )
}

export default Main