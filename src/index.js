import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

// Enable Hot Reloading by destructuring the binding of React && HTML
// When any changes occur, we want to use the renderApp() func
const MOUNT = document.getElementById('root'); // Or document.querySelector('#root')
const renderApp = Comp => ReactDOM.render(Comp, MOUNT);

// Confirm Hot Reloading is working
if (module.hot) {
    // When change occurs, inform Hot Loader we're accepting the change
    module.hot.accept('./App', () => {
        // Accept hot change request
        // Re-require App.js & render new instance of the component
        const NextRoutes = require('./routes').default;
        renderApp(<Routes />);
    })
}

renderApp(<Routes />);

serviceWorker.unregister();
