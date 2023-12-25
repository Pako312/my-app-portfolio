import React, { useEffect } from 'react'
import styles from './style.module.scss'
import SkillCard from './skill-card';
import SearchBar from '../searchBar';
import { SKILLS_DATA } from './skill-card/mock_data'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import skillsOperations from '..//redux/skills/skill-card/thunk'

export const Skills = () => {
  // Нужно вставить в мап при апи skills вместо SKILLS_DATA
  const skills = useSelector(state => state.skills.list) 
  const isLoading = useSelector(state => state.skills.isFetching)
  const dispatch = useDispatch();
  const { fetchSkills } = skillsOperations
  useEffect(() => {
    dispatch(fetchSkills())
  }, [])

  if (isLoading) {
    return (
      <div>
        loading...
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <section className={styles["skillsPage"]}>
        <SearchBar title="Skills" />
        <div className={styles["skillsList"]}>
          {skills.map((skill, idx) => {
            return (
              (
                <Link to={`/skills/${skill.slug}`}
                  key={skill.id}
                >
                  <SkillCard
                    label={skill.label}
                    img={skill.image}
                  />
                </Link>
              )
            )
          }
          )}
        </div>
      </section>
    </div>

  );
};

