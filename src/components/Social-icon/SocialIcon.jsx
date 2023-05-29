
import { Fragment } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
//import styles from './SocialIcon.module.css'

function SocialIcon () {
    return (
        <Fragment>
            <ul>
                <li><a href="https://www.instagram.com/" target="_blank"><FaFacebookF /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a></li>
            </ul>
        </Fragment>
    )
}

export default SocialIcon;