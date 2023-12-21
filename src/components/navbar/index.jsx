import React from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className={style['navBarContainer']}>
            <div className={style.navBar}>
                <Link to={'/'}>
                    <div className={style.navItm_name}>
                        <i className={style['navIcon']}></i>
                        Name LASTNAME
                    </div>
                </Link>
                <Link to={'/skills'}>
                    <div className={style.navItm}>
                        <i className={style['navIcon_skills']}></i>
                        Skills
                    </div>
                </Link>
                <Link to={'/projects'}>
                    <div className={style.navItm}>
                        <i className={style['navIcon_projects']}></i>
                        Projects
                    </div>
                </Link>
                <Link to={'/experiences'}>
                    <div className={style.navItm}>
                        <i className={style['navIcon_exp']}></i>
                        Experiences
                    </div>
                </Link>
                <Link to={'/education'}>
                    <div className={style.navItm}>
                        <i className={style['navIcon_edu']}></i>
                        Education
                    </div>
                </Link>
                <Link to={'/resume'}>
                    <div className={style.navItm}>
                        <i className={style['navIcon_resume']}></i>
                        Resume
                    </div>
                </Link>
                <div className={style.navItm_search}>
                    <Link to={'/search'}>
                        <i className={style['navIcon_search']}></i>
                    </Link>
                    <div className={style['div']}>
                        <Link to={'/search'}>

                            <i className={style['navIcon_switcher']}></i>

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar