import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App2 from './App2';
import { setRootElementForApp } from '../../bootstrap/setRoorElementForApp';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (App2 as any),
  domElementGetter: setRootElementForApp,
});

export const bootstrap = [reactLifecycles.bootstrap, ];

export const mount = [reactLifecycles.mount, ];

export const unmount = [reactLifecycles.unmount, ];
