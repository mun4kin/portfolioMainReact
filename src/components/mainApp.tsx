import React from 'react';
import './mainApp.scss';

import { HashRouter } from 'react-router-dom';
import { Tile } from 'juicyfront';
import AboutMeTile from './molecules/AboutMeTile';

const MainApp: React.FC = () => {
  const Tiles = [
    {
      id: 1,
      content: <AboutMeTile/>,
      size: 4
    }
  ];

  const getTiles = () => Tiles.map(item => {
    return <div key={item.id} style={{ gridColumn: `span ${item.size} ` }}>
      <Tile className='main__tile' >
        {item.content}
      </Tile>
    </div>;
  });

  return (

    <HashRouter>

      <div className='main__grid'>
        {getTiles()}
      </div>


    </HashRouter>


  );
};
export default MainApp;
