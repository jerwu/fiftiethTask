import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

import { Router, Route, browserHistory, indexRoute} from 'react-router'
import routes from './modules/routes'

// Render the main component into the dom
ReactDOM.render((<Router routes={routes} history={browserHistory}>

				</Router>),
	    		document.getElementById('app'));
