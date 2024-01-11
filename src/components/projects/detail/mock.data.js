import {SHORT_SKILL_BY_SLUG} from "..//..//skills/skill-card/mock_data";
import ProjectOneImg from '..//..//assets/img/no-img.svg'
import ProjectTwoImg from './/..//..//assets//images/svelte-logo.png'
export const PROJECTS_DATA = [
  {
    id: 0,
    icon: ProjectOneImg,
    name: 'Log in/Sign up Form',
    links: [
      {
        id: 0,
        link: 'https://my-app-14-timurs-projects-a97a4933.vercel.app/',
        label: 'Vercel'
      }
    ],
    description: 'I created Login/Signup Form by using React-Hook-Form. Languages I used JS, React lib, HTML, CSS',
    skills: [
      SHORT_SKILL_BY_SLUG('js'),
      SHORT_SKILL_BY_SLUG('html'),
      SHORT_SKILL_BY_SLUG('css'),
      SHORT_SKILL_BY_SLUG('react'),
      
    ]
  },
  {
    id: 1,
    icon: ProjectTwoImg,
    name: 'Project 2',
    links: [
      {
        id: 1,
        link: 'https://github.com',
        label: 'Github'
      }
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
    skills: [
      SHORT_SKILL_BY_SLUG('js'),
      SHORT_SKILL_BY_SLUG('html'),
    ]
  } 
]