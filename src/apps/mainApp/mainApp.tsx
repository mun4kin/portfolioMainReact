import React from 'react';
import './mainApp.scss';
import AsideMenu from './components/molecules/AsideMenu';
import { HashRouter } from 'react-router-dom';

const MainApp: React.FC = () => {


  return (

    <HashRouter>
      <div className='main__wrapper'>
        <AsideMenu/>
        <div className='main__content angular-app' id='mainContent'/>
        {/* <iframe src='https://mun4kin.github.io/portfolioStoryBook/index.html?path=/story/backdroploader--backdrop-loader' width='100%' height='100%' allowFullScreen/>*/}
        { console.log(location)}
      </div>
    </HashRouter>


  );
};
export default MainApp;
