import React from 'react'
import style from './style.module.scss'
import SearchBar from '../searchBar'
import Chip from './chip'
import ProjectCard from './cards'
import projectImg from '../assets/img/no-img.svg'
import gitLinkIcon from '../assets/img/GitLink.svg'
import tsLogo from '../assets/images/ts-logo.png'
import svelte from '../assets/images/svelte-logo.png'
import jsIcon from '..//assets/images/js-logo.png'
import { PROJECTS_DATA } from './detail/mock.data'

export const Projects = () => {

    return (
        <div className={style.container}>
            <div className={style['projectBox']}>
                <SearchBar title="Projects" />
                <div className={style['chipBox']}>
                    <Chip asLink={'/skills/ts'} label="Typescript"
                        icon={jsIcon}
                    />
                    <Chip label="Sass" />
                    <Chip label="Svelte" />
                </div>
                <div className={style['prjCards']}>
                    {PROJECTS_DATA.map(item => {
                         return(
                            <ProjectCard project={item} />
                         )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

