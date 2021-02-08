import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import MainApp from './mainApp';

const tegName = 'mainContent';
const findTeg = (tegName = ''):Promise<boolean> => new Promise((resolve) => {
  document.getElementById(`${tegName}`) && resolve(true);
  const i = setInterval(() => {
    if (document.getElementById(`${tegName}`)) {
      resolve(true);
      clearInterval(i);
    }
  }, 50);
});
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (MainApp as React.FC),
  domElementGetter: () => document.getElementById(tegName) as HTMLElement
});

export const bootstrap = [
  async() => {
    await findTeg(tegName);
    return true;
  },
  reactLifecycles.bootstrap,
];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount, ];
