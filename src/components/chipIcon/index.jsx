import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import clsx from 'clsx';

const parentEl = ({ to, label, children, icon }) => {
    return to ? (
        <Link data-label={label} to={to} className={styles['chip-icon']}>
            <div className={styles['img-wrap']}>
                <img src={icon} alt={'icon'} />

            </div>
        </Link>) : (
        <span
            className={clsx(styles['chip-icon'], styles['cursor-help'])}
            data-label={label}
        >
            {label}
        </span>
    )
}

const ChipItm = (props) => {
    const {
        to,
        icon,
        label,
        className


    } = props
    return (
        <div>
            <parentEl data-label={label}
                to={to}
                className={clsx(styles['chip-icon'], styles['cursor-help'])}
            >
                <div className={styles['img-wrap']}>
                    <img src={icon} alt={'icon'} />
                </div>
            </parentEl>
        </div>

    )
}

export default ChipItm