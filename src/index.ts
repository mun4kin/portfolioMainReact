import './index.css';
import * as serviceWorker from './serviceWorker';
import { registerApps } from './bootstrap/registerApps';
import { start, setBootstrapMaxTime } from 'single-spa';
import 'zone.js';
setBootstrapMaxTime(6000, false);
registerApps();
start();
serviceWorker.unregister();
