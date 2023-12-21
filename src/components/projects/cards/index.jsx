import React from 'react'
import styles from './style.module.scss'
import BoxLayout from '../../box-layout';
import Chip from '../chip';
import CardLink from '../../cardLink';
import gitLink from '..//..//assets/img/GitLink.svg'


const ProjectCard = (props) => {
    const {
        image,
        title,
        icon,
        icon2,
        text,
        to,
    } = props
    console.log(props, 'test');
    return (
        <BoxLayout className={styles['slickBox']}>
            <div className={styles['imgBox']}>
                <img className={styles['slickBoxImg']} src={image}></img>
            </div>
            <div className={styles['titleBox']}>
                <h2>{title}</h2>
                <CardLink
                label='github' 
                to={'https://github.com/Pako312?tab=repositories'}
                // img={gitLink} 
                />
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
            {/* <CardLink /> */}
            <a className={styles['gitLink']} href="#">
                <BoxLayout className={styles['boxLayout']}>
                    <img className={styles['tsLinkIcon']} src={icon2}></img>
                </BoxLayout>
            </a>
        </BoxLayout>
    )
}

export default ProjectCard;
