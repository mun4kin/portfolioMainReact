import React from 'react';
import './mainApp.scss';
import AsideMenu from './components/molecules/AsideMenu';

const MainApp: React.FC = () => {

  return (
    <>
      <div className='main__wrapper'>
        <AsideMenu/>
        <div className='main__content'/>
        {/* <HashRouter>*/}
        {/*  <Link className='nav__link' to='/worktime'>Worktime</Link>*/}
        {/*  <Link className='nav__link' to='/app2'>App 2</Link>*/}
        {/* </HashRouter>*/}
      </div>
    </>
  );
};

export default MainApp;
