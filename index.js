import App from './App.js';
//creates app and appends to DOM
const app = new App();
const dom = app.renderDOM();
document.body.prepend(dom);
