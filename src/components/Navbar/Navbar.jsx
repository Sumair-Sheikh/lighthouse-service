import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css'
import { Fragment } from 'react';

const Navbar = () => {

    const router = useRouter();

    const isActive = (href) => {
        return router.pathname === href;
    };

    return (
        <Fragment>

            <li className={isActive('/') ? `${styles['active']}` : ''}>
                <Link href="/">
                    Home
                </Link>
            </li>

            <li className={isActive('/about-us') ? `${styles['active']}` : ''}>
                <Link href="/about-us">
                    About Us
                </Link>
            </li>

            <li className={isActive('/our-services') ? `${styles['active']}` : ''}>
                <Link href="/our-services">
                    Our Services
                </Link>
            </li>

            <li className={isActive('/our-blogs') ? `${styles['active']}` : ''}>
                <Link href="/our-blogs">
                    Our Blogs
                </Link>
            </li>

            <li className={isActive('/contact-us') ? `${styles['active']}` : ''}>
                <Link href="/contact-us">
                    Contact Us
                </Link>
            </li>
        </Fragment>
    );
};

export default Navbar;
