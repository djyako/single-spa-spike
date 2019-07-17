import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  'navBar',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true,
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

start();