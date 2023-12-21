import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SKILLS_BY_NAME } from "../skill-card/mock_data";
import styles from './style.module.scss'

export const DetailSkill = () => {
    const { slug } = useParams()
    const [skillByName, setSkillByName] = useState(null)
    useEffect(() => {
        setSkillByName(SKILLS_BY_NAME(slug))
    }, []);

    if (!skillByName) {
        return null
    }
    return (
        <div className={styles['detail-page-wrap']}>
            <h1 className={styles['title']}>
                {skillByName.label}
            </h1>
            <p className={styles['description']}>
                {skillByName.description}
            </p>
        </div>
    )
}
