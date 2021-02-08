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
    app: () => {

      return import('lego-proj/module/main-es5.js' as string);
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

  registerApplication({
    name: 'storybook',
    app: () => import('../apps/storyBook' as string),
    activeWhen: (location: Location) => locationContainsPath(location, '#/storybook'),
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
