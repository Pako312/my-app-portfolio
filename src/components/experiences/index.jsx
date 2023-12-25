import React from 'react'
import SearchBar from '../searchBar'
import styles from './style.module.scss'
import ExperiencesCard from './experienceCard'

export const Experiences = () => {
  return (
    <div className={styles.container}>

      <SearchBar title='Experiences' />

      <div className={styles['expCard']}>
        <div className={styles['expCard_1']}>
          <ExperiencesCard />
        </div>
        <div className={styles['expCard_2']}>
          <ExperiencesCard />
        </div>
        <div className={styles['expCard_3']}>
          <ExperiencesCard />
        </div>
      </div>
    </div>
  )
}
