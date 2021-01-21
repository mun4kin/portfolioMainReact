import { registerApplication } from 'single-spa';

export const registerApps = () => {

  registerApplication({
    name: 'root',
    app: () => import('../apps/mainApp' as string),
    activeWhen: () => true,
  });

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
