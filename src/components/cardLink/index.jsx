import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { ReactComponent as LinkIcon } from '../assets/img/GitLink.svg'

const CardLink = (props) => {
    const {
        to,
        label,
        img
    } = props
    return (
        <div>
            <a href={to} className={styles['card-link']} data-label={label}>
                <i className={styles['link-icon']}></i>

                <LinkIcon />
                {/* <img src={img} className={styles['imgLink']}></img> */}
            </a>

        </div>
    )
}

export default CardLink;