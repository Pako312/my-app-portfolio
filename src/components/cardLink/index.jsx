import React from 'react'
import { Link } from 'react-router-dom'

const CardLink = (props) => {
    const {
        to,
        label
    } = props
    return (
        <div>
            <a href={to} className={styles['card-link']} data-label={label}>
                <LinkIcon />
            </a>

        </div>
    )
}

export default index