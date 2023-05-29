import React from 'react'
import InnerBanner from '../InnerBanner/InnerBanner'
import Blogs from '../Blogs/Blogs'
import FooterContact from '../FooterContact/FooterContact'

function Main() {
    return (
        <>
            <InnerBanner
                backgroundimage="/images/blogs-banner.png"
                title="Our Blogs"
            />
            <Blogs />
            <FooterContact />
        </>
    )
}

export default Main