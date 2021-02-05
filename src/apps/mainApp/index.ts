import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import MainApp from './mainApp';


const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (MainApp as React.FC),
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap, ];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount, ];

function domElementGetter() {
  return document.getElementById('root') as HTMLDivElement;
}
