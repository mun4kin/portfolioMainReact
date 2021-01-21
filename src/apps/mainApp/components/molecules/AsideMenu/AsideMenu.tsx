import React from 'react';
import './AsideMenu.scss';
import MenuItem from '../../atoms/MenuItem';
import ProjectIcon from '../../../assets/svg/projects';
import IdeasIcon from '../../../assets/svg/ideas';
import StoryBookIcon from '../../../assets/svg/storybook';
import { IMenuItem } from '../../atoms/MenuItem/MenuItem';
import { HashRouter } from 'react-router-dom';
import Photo from '../../atoms/Photo';

const AsideMenu: React.FC = () => {


  const configMenu:IMenuItem[] = [
    {
      itemName: 'Projects',
      itemIcon: <ProjectIcon fill={'white'}/>,
      itemLink: '/projects',

    },
    {
      itemName: 'Ideas',
      itemIcon: <IdeasIcon fill={'white'}/>,
      itemLink: '/blog',

    },
    {
      itemName: 'StoryBook',
      itemIcon: <StoryBookIcon fill={'white'}/>,
      itemLink: '/storybook',

    }
  ];
  /* Элементы меню*/
  const items = configMenu.map(item => (<MenuItem key={item.itemName} config={item} />));
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <div className='aside-menu__wrapper'>
      <Photo/>
      <HashRouter>
        {items}
      </HashRouter>
    </div>

  );
};

export default AsideMenu;
