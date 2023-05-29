import { createServerContext } from 'react';
import HomeSlider from "./HomeSlider/HomeSlider";
import WelcomeServices from './WelcomeServices/WelcomeServices';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeServices from './HomeServices/HomeServices';
import BlogsSlider from '../BlogsSlider/BlogsSlider';
import FooterContact from '../FooterContact/FooterContact';




function Main () {
    return (
        <>
            <HomeSlider />
            <WelcomeServices />
            <HomeAbout />
            <HomeServices />
            <BlogsSlider />
            <FooterContact />
        </>
    )
}
export default Main;