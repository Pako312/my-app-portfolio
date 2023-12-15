import style from './style.module.scss';
import edu from './components/assets/img/Без названия (1).svg'

import Home from './components/home';
import { Routes, Route, Link } from 'react-router-dom';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Experiences } from './components/experiences';
import { Education } from './components/education';
import { Resume } from './components/resume';
import { Search } from './components/search';

function App() {
  return (
    <div>

      <div className={style.navBar}>
        <div className={style.navItm_name}>
          <Link to={'/'}> Name LASTNAME</Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/skills'}>Skills</Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/projects'}>
            Projects
          </Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/experiences'}>Experiences</Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/education'}>
            Education
          </Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/resume'}>
            Resume
          </Link>
        </div>
        <div className={style.navItm}>
          <Link to={'/search'}>
            Search
          </Link>
        </div>

      </div>
      <div className={style.container}>
        {/* <Home /> */}
      </div>

      <h1 className={style.header}>

      </h1>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={'/skills'} element={<Skills />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/experiences'} element={<Experiences />} />
        <Route path={'/education'} element={<Education />} />
        <Route path={'/resume'} element={<Resume />} />
        <Route path={'/search'} element={<Search />}/>
      </Routes>



    </div >
  );

}

export default App;
