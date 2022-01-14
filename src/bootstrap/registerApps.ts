import { registerApplication, start } from 'single-spa';


export const registerRootApp = () => {
  registerApplication({
    name: 'root',
    app: () => import('../components'),
    activeWhen: () => true,
  });
  start();
};

export const registerApps = () => {
  // =======================================================================================================================================
  // registerApplication({
  //   name: 'worktime',
  //   app: async () => await dynamicScript({
  //     script: 'sap/bc/ui5_ui5/sap/Z_HR_WORKTIME_T/remoteEntry.js',
  //     scope: 'juicy_worktime',
  //     module: './app'
  //   }),
  //   activeWhen: (location: Location) => !!~location.href.indexOf('#/service/worktime'),
  //   customProps: {
  //
  //     basename: 'service/worktime'
  //   }
  // });

};
