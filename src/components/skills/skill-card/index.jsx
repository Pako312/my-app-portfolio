import React from 'react'
import BoxLayout from '..//..//box-layout'
import styles from './style.module.scss'

const SkillCard = (props) => {
    const {
        label,
        img
    } = props;

    return (
        <BoxLayout className={styles["skill-card"]}>
            <h3 className={styles["title"]}>
                {label}
            </h3>
            <div className={styles["image-wrap"]}>
                <img className={styles['image']} src={img} alt="Skill logo" />
            </div>
        </BoxLayout>
    );
};

export default SkillCard


