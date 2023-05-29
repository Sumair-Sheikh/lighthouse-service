import React from 'react'
import styles from './HeadingCenter.module.css'

function HeadingCenter(props) {
    return (
        <div className={styles['heading']}>
            <h3>{props.toptitle}</h3>
            <h2>{props.bottomtitle}</h2>
        </div>
    )
}

export default HeadingCenter