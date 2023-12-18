import React from 'react'
import styles from './style.module.scss'
import SkillCard from './skill-card';
import SearchBar from '../searchBar';
export const Skills = () => {
  return (
    <section className={styles["skillsPage"]}>
      skills
      <SearchBar title="Skills" />
      <div className={styles["skillsList"]}>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </section>
  );
};

