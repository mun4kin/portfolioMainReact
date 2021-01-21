import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App1 from './App1';
import { setRootElementForApp } from '../../bootstrap/setRoorElementForApp';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (App1 as any),
  domElementGetter: setRootElementForApp,
});

export const bootstrap = [reactLifecycles.bootstrap, ];

export const mount = [reactLifecycles.mount, ];

export const unmount = [reactLifecycles.unmount, ];
