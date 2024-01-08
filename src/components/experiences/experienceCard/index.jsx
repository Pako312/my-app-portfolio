import React from 'react'
import BoxLayout from '../../box-layout'
import Chip from '../../projects/chip'
import styles from './style.module.scss'
import CardLink from '../../cardLink'
import noImg from '..//..//assets/img/no-img.svg'

const ExperiencesCard = () => {
    return (
        <div className={styles['expCardBox']}>
            <BoxLayout className={styles['expCard']}>
                <div className={styles['iconsBox']}>
                    <img
                        className={styles['mainIcon']}
                        src={noImg}
                    >
                    </img>
                    <div className={styles['infoField']}>
                        <h2>Open Source Developer</h2>
                        <div className={styles['infoIcons']}>
                            <CardLink className={styles.iconsField} label='company' />
                            <CardLink label='company' />
                            <CardLink label='company' />
                        </div>
                        <div>December 2023 - Present - 2 days</div>
                        <div>Creating awesome tools for developers</div>
                    </div>
                </div>
            </BoxLayout>
            {/* <div className={styles['borderLine']}></div> */}
        </div>
    )
}

export default ExperiencesCard