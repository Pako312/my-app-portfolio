import React from 'react'
import BoxLayout from '..//..//box-layout'
import styles from './style.module.scss'
import jsLogo from '..//..//assets/images/js-logo.png'

const SkillCard = () => {
    return (
        <BoxLayout className={styles["skill-card"]}>
            <h3 className={styles["title"]}>Javascript</h3>
            <div className={styles["image-wrap"]}>
                <img src={jsLogo} alt="Skill logo" />
            </div>
        </BoxLayout>
    );
};

export default SkillCard


