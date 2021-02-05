import { registerApplication } from 'single-spa';
import { locationContainsPath } from './locationContainsPath';


export const registerApps = () => {


  registerApplication({
    name: 'root',
    app: () => import('../apps/mainApp' as string),
    activeWhen: () => true,
  });


  registerApplication({
    name: 'lego',
    app: async() => {
      return import('lego-proj' as string);
    },
    activeWhen: (location: Location) => {
      return locationContainsPath(location, '#/lego');
    },
  });
  registerApplication({
    name: 'cv',
    app: () => import('cv' as string),
    activeWhen: (location: Location) => locationContainsPath(location, '#/blog'),
  });

  /*
   * registerApplication({
   *   name: 'angular',
   *   app: () => import('single-spa-angular-app' as string),
   *   activeWhen: (location: Location) => locationContainsPath(location, '#/lego'),
   * });
   */
  /*
   * RegisterApplication({
   *   name: 'worktime',
   *   app: () => import('worktime/_worktime/dist/single-spa-worktime' as string),
   *   activeWhen: (location: Location) => locationContainsPath(location, '#/worktime'),
   *   customProps: {
   *     user,
   *     basename: '/#/worktime'
   *   }
   * });
   */
};
