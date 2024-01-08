import React, { useEffect, } from "react";
import { useParams } from "react-router-dom";
import styles from './style.module.scss'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import skillsOperation from "..//..//redux//skills//skill-card//thunk"
import Chip from "../../projects/chip";
import ChipItm from "../../chipIcon";

export const DetailSkill = () => {
    const { slug } = useParams()
    const data = useSelector((state) => state.skills.data);
    const dispatch = useDispatch()
    const newDATA = {
        ...data
    }
    const { fetchSkillBySlug } = skillsOperation;
    useEffect(() => {
        dispatch(fetchSkillBySlug(slug));
    }, []);    
    console.log(newDATA);
    return (
        <div key={newDATA.id} className={styles.container}>
            <div className={styles['detail-page-wrap']}>
                <h1 className={styles['title']}>
                    {newDATA.label}
                </h1>
                <p className={styles['description']}>
                    {newDATA.description}
                </p>
                <div className={styles["chips-wrap"]}>
                    {newDATA?.relatedExperience?.map((chip) => (
                        <Chip
                            key={chip.id}
                            className={styles["chip"]}
                            icon={chip.icon}
                            label={chip.description}
                            // asLink={chip.icon}
                            asLink={"sdsd"}

                        />
                    ))}
                </div>
            </div>
        </div>

    )
}
