import React from 'react';
import './Photo.scss';

import { UserPhoto } from 'root-front';
import AntonPhoto from '../../../assets/photo/anton.jpg';
import Portfolio from '../../../assets/img/portfolio-logo.png';

interface IProps {
 user?:string;
}

const Photo: React.FC<IProps> = ({ user = 'anton' }: IProps) => {


  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className='photo__wrapper'>

      <img className='photo__logo' src={Portfolio} alt=''/>

      <div className='photo__circle'>
        <UserPhoto url={user === 'anton' ? AntonPhoto : undefined} radius='70px' />
      </div>
      <p className='photo__text'>Pugachev</p>
      <p className='photo__text'>Anton</p>
    </div>
  );
};

export default Photo;
