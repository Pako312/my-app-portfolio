import React from 'react'
import styles from './style.module.scss'
import BoxLayout from '../../box-layout';
import Chip from '../chip';


const ProjectCard = (props) => {
    const {
        image,
        title,
        icon,
        icon2,
        text,
    } = props
    return (
        <BoxLayout className={styles['slickBox']}>
            <div className={styles['imgBox']}>
                <img className={styles['slickBoxImg']} src={image}></img>
            </div>
            <div className={styles['titleBox']}>
                <h2>{title}</h2>
                <a className={styles['gitLink']} href="#">
                    <BoxLayout className={styles['boxLayout']}>
                        <img className={styles['gitLinkIcon']} src={icon}></img>
                    </BoxLayout>
                </a>
            </div>
            <div className={styles['borderLine']}>
            </div>
            <div className={styles['italicText']}>
                <span>Website template</span>
                <span>1 day</span>
            </div>
            <div className={styles['slickText']}>
                {text}
            </div>
            <div className={styles['dateBox']}>
                <Chip
                    className={styles['date']}
                    label="December 2023" />
                <Chip
                    className={styles['date']}
                    label="now" />
            </div>
            <div className={styles['borderLine']}>
            </div>
            <a className={styles['gitLink']} href="#">
                <BoxLayout className={styles['boxLayout']}>
                    <img className={styles['tsLinkIcon']} src={icon2}></img>
                </BoxLayout>
            </a>
        </BoxLayout>
    )
}

export default ProjectCard;
