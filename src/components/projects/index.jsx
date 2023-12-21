import React from 'react'
import style from './style.module.scss'
import SearchBar from '../searchBar'
import Chip from './chip'
import ProjectCard from './cards'
import projectImg from '../assets/img/no-img.svg'
import gitLinkIcon from '../assets/img/GitLink.svg'
import tsLogo from '../assets/images/ts-logo.png'
import svelte from '../assets/images/svelte-logo.png'

export const Projects = () => {
    return (
        <div className={style.container}>
            <div className={style['projectBox']}>
                <SearchBar title="Projects" />
                <div className={style['chipBox']}>
                    <Chip label="Typescript" />
                    <Chip label="Sass" />
                    <Chip label="Svelte" />
                </div>
                <div className={style['prjCards']}>
                    <ProjectCard
                        image={projectImg}
                        title={'Slick Portfolio'}
                        icon={gitLinkIcon}
                        icon2={tsLogo}
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facilis eos consequatur similique, ratione animi veniam voluptates alias ullam praesentium voluptatibus et sed. Ea quae voluptas incidunt voluptatum veniam praesentium."
                    />
                    <ProjectCard
                        image={svelte}
                        title={'Slick Portfolio'}
                        icon={gitLinkIcon}
                        icon2={tsLogo}
                        text="A Vercel-like developer portfolio website template made with Typescript and SvelteKit."
                    />
                </div>



            </div>

        </div>
    )
}

