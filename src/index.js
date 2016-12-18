import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

import DataCheck from './components/DataCheck'
import MsgEdit from './components/MsgEdit'

import { Router, Route, browserHistory} from 'react-router'

// Render the main component into the dom
ReactDOM.render((
				<Router history={browserHistory}>
					<Route path="/" component={App}>
						<Route path="/dataCheck" component={DataCheck}/>
						<Route path="/msgEdit" component={MsgEdit}/>
					</Route>
				</Router>
				),document.getElementById('app'));
