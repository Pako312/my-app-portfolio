import React from 'react'
import styles from './style.module.scss'
import SkillCard from './skill-card';
import SearchBar from '../searchBar';
import { SKILLS_DATA } from './skill-card/mock_data'
import { Link } from 'react-router-dom';



export const Skills = () => {
  return (
    <section className={styles["skillsPage"]}>
      <SearchBar title="Skills" />
      <div className={styles["skillsList"]}>
        {SKILLS_DATA.map((skill) => (
          <Link to={`/skills/${skill.name}`}>
            <SkillCard
              key={skill.id}
              label={skill.label}
              img={skill.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

