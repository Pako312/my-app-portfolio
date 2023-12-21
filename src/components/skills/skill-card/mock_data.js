import React from 'react'
import jsLogo from '../../assets/images/js-logo.png'
import tsLogo from '../../assets/images/ts-logo.png'
import cssLogo from '../..//assets/images/html-logo.svg'


export const SKILLS_DATA = [
    {
        id: 0,
        name: 'js',
        label: 'JavaScript',
        image: jsLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 1,
        name: 'ts',
        label: 'TypeScript',
        image: tsLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 2,
        name: 'css',
        label: 'CSS',
        image: cssLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 3,
        name: 'js',
        label: 'JavaScript',
        image: '',
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 4,
        name: 'js',
        label: 'JavaScript',
        image: '',
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 5,
        name: 'js',
        label: 'JavaScript',
        image: '',
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 5,
        name: 'js',
        label: 'JavaScript',
        image: '',
        description: 'lorem ipsum',
        relatedExperience: []
    }
]

export const SKILLS_BY_NAME = (name) =>{
    return SKILLS_DATA.find(skill => skill.name === name) ||null
}

