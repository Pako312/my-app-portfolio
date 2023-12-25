import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SKILLS_BY_NAME } from "../skill-card/mock_data";
import styles from './style.module.scss'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import skillsOperation from "..//..//redux//skills//skill-card//thunk"
import Chip from "../../projects/chip";
import img from '..//..//assets//img/no-img.svg'
export const DetailSkill = () => {
    const { slug } = useParams()
    // const [skillByName, setSkillByName] = useState(null)
    const data = useSelector((state) => state.skills.data);
    const dispatch = useDispatch()
    const newDATA = {
        ...data
    }
    const { fetchSkillBySlug } = skillsOperation;

    // const [skillByName, setSkillByName] = useState(null)
    useEffect(() => {
        // setSkillByName(SKILLS_BY_NAME(slug))
        dispatch(fetchSkillBySlug(slug));
    }, []);

    // if (!skillByName) {
    //     return null;
    // }
    
    return (
        <div key={newDATA.id} className={styles.container}>
            <div className={styles['detail-page-wrap']}>
                <h1 className={styles['title']}>
                    {/* {skillByName.label} */}
                    {newDATA.label}
                </h1>
                <p className={styles['description']}>
                    {/* {skillByName.description} */}
                    {newDATA.description}
                </p>
                <div className={styles["chips-wrap"]}>
                    {newDATA && newDATA.relatedExperience && newDATA.relatedExperience.map((chip, idx) => {
                    return (
                        <Chip
                            className={styles["chip"]}
                            icon={chip.icon}
                            label={chip.description}
                        />
                        
                        
                    );
                })}
                </div>
            </div>
        </div>

    )
}
