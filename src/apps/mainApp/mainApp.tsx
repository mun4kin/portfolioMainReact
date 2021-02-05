import React from 'react';
import './mainApp.scss';
import AsideMenu from './components/molecules/AsideMenu';

const MainApp: React.FC = () => {

  return (
    <>
      <div className='main__wrapper'>
        <AsideMenu/>
        <div className='main__content angular-app' id='mainContent'/>
        {/* <iframe src='https://mun4kin.github.io/portfolioStoryBook/index.html?path=/story/backdroploader--backdrop-loader' width='100%' height='100%' allowFullScreen/>*/}
        {/* <HashRouter>*/}
        {/*  <Link className='nav__link' to='/worktime'>Worktime</Link>*/}
        {/*  <Link className='nav__link' to='/app2'>App 2</Link>*/}
        {/* </HashRouter>*/}
      </div>
    </>
  );
};
export default MainApp;
