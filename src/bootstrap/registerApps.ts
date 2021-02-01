import { registerApplication } from 'single-spa';
import { locationContainsPath } from './locationContainsPath';

function findTeg():Promise<boolean> {
  return new Promise((resolve) => {
    let r;
    r = document.getElementById('lego');
    r && resolve(true);
    const i = setInterval(() => {
      r = document.getElementById('lego');

      if (r) {
        resolve(true);
        clearInterval(i);
      }
    }, 500);

  });
}


export const registerApps = () => {


  registerApplication({
    name: 'root',
    app: () => import('../apps/mainApp' as string),
    activeWhen: () => true,
  });


  registerApplication({
    name: 'lego',
    app: async() => {
      await findTeg();
      return import('lego-proj' as string);
    },
    activeWhen: (location: Location) => {
      return locationContainsPath(location, '#/lego');
    },
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
