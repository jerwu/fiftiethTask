import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

import DataCheck from './components/DataCheck'
import MsgEdit from './components/MsgEdit'
import QuestionnaireList from './components/QuestionnaireList'

import { Router, Route, browserHistory } from 'react-router'
// import { IndexRoute } from 'react-router'

// Render the main component into the dom
ReactDOM.render((
				<Router history={browserHistory}>
					<Route path="/" component={QuestionnaireList}/>
					<Route path="/app" component={App}>
						<Route path="/msgEdit" component={MsgEdit}/>
					</Route>
					<Route path="/dataCheck" component={DataCheck}/>
				</Router>
				),document.getElementById('app'));
// <IndexRoute component={QuestionnaireList}/>