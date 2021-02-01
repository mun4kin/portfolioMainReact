import './index.css';
import * as serviceWorker from './serviceWorker';
import { registerApps } from './bootstrap/registerApps';
import { start } from 'single-spa';
import 'zone.js';
registerApps();
start();
serviceWorker.unregister();
