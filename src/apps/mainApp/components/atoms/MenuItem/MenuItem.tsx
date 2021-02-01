import React, { ReactFragment } from 'react';
import './MenuItem.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'root-front';


export interface IMenuItem {
  itemName: string,
  itemIcon: ReactFragment
  itemLink: string,

}
interface IProps extends React.HTMLProps<any>{
  config:IMenuItem
}
const MenuItem: React.FC<IProps> = ({ config }:IProps) => {
  const location = useLocation();
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <Link to={config.itemLink} className={`menu-item__wrapper ${location.pathname === config.itemLink && 'menu-item__active'}`}>
      {config.itemIcon}
      <h3 className='menu-item__text '>{config.itemName}</h3>
    </Link>
  );
};

export default MenuItem;
