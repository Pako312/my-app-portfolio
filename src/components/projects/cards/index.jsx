import React from 'react'
import styles from './style.module.scss'
import BoxLayout from '../../box-layout';
import Chip from '../chip';
import CardLink from '../../cardLink';
import gitLink from '..//..//assets/img/GitLink.svg'
import ChipItm from '../../chipIcon';
import tsLogo from '..//..//assets/images/ts-logo.png'



const ProjectCard = (props) => {
    const {
        image,
        title,
        icon,
        icon2,
        text,
        to,
        project
    } = props
    console.log(props, 'test');
    return (
        <BoxLayout className={styles['slickBox']}>
            <div className={styles['imgBox']}>
                <img className={styles['slickBoxImg']} src={project.icon}></img>
            </div>
            <div className={styles['titleBox']}>
                <h2>{project.name}</h2>

                {project.links.map(link => (
                    <CardLink
                        label={link.label}
                        to={link.link}

                    />))}

            </div>
            <div className={styles['borderLine']}>
            </div>
            <div className={styles['italicText']}>
                <span>Website template</span>
                <span>1 day</span>
            </div>
            <div className={styles['slickText']}>
                {project.description}
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

            <div className={styles['iconsBox']}>
            {project.skills.map((skill, idx) => {
                return (
                   
                        <ChipItm
                            key={idx}
                            label={skill.label}
                            to={`/skills/${skill.slug}`}
                            icon={skill.image}
                            // className={styles['chip-icon']}
                        />
                        
                        )
                    })}
                    </div>
        </BoxLayout>
    )
}

export default ProjectCard;
