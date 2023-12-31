// GET api/v1/Skills
// GET api/v1/skill/js

import React from 'react'
import jsLogo from '../../assets/images/js-logo.png'
import tsLogo from '../../assets/images/ts-logo.png'
import htmlLogo from '../..//assets/images/html-logo.svg'
import img from '../../assets/img/no-img.svg'
import reduxLogo from '..//..//assets/images/redux.svg'
import cssLogo from '..//..//assets//img/cssImg.png'
import sassLogo from '..//..//assets/images/sass-logo.png'
import reactLogo from '..//..//assets//images//react-logo.svg'

export const SKILLS_BY_NAME = (slug) => {
    return SKILLS_DATA.find((skill) => skill.slug === slug) || null;
};

export const SHORT_SKILL_BY_SLUG = (slug) => {
    const findSkill = SKILLS_DATA.find(skill => skill.slug === slug)
    if (!findSkill) {
        return {}
    }
    return {
        id: findSkill.id,
        slug: findSkill.slug,
        label: findSkill.label,
        image: findSkill.image,
        description: findSkill.description,
        relatedExperience: findSkill.relatedExperience,
    }
}
export const SKILLS_DATA = [
    {
        id: 0,
        slug: 'js',
        label: 'JavaScript',
        image: jsLogo,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
        relatedExperience: [
            {
                id: 0,
                icon: img,
                description: 'Open Source Developer @ Self-employed'
            },
            {
                id: 1,
                icon: img,
                description: 'Freelancer @ self-employed',
            },
        ]
    },
    {
        id: 1,
        slug: 'redux',
        label: 'Redux',
        image: reduxLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 2,
        slug: 'css',
        label: 'CSS',
        image: cssLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 3,
        slug: 'html',
        label: 'HTML',
        image: htmlLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 4,
        slug: 'sass',
        label: 'SASS',
        image: sassLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
    {
        id: 5,
        slug: 'react',
        label: 'React Js',
        image: reactLogo,
        description: 'lorem ipsum',
        relatedExperience: []
    },
]


