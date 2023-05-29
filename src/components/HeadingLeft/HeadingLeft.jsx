import React from 'react'
import styles from './HeadingLeft.module.css'

function HeadingLeft(props) {
    return (
        <div className={styles['heading']}>
            <h3>{props.toptitle}</h3>
            <h2>{props.bottomtitle}</h2>
        </div>
    )
}

export default HeadingLeft