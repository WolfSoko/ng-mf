import {init} from '@module-federation/enhanced/runtime';

fetch('http://localhost:4200/module-federation.manifest.json')
  .then(res => res.json())
  .then(remoteConfig => init({name: 'dashboard', remotes: remoteConfig}))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
