require('normalize.css/normalize.css');
require('styles/App.scss');
// require('styles/boostrap.min.css');
// require('bootstrap')

import React from 'react';
import ReactDom from 'react-dom';

//import Link component
import { Link } from 'react-router'

import Navbar from './Navbar'
// import MsgEdit from './MsgEdit'
// import QuestionnaireList from './QuestionnaireList'

class AppComponent extends React.Component {
	handleClick = (ev) => {
		let btnDom = ReactDom.findDOMNode(this.refs.btn);
			// containerDom = btnDom.parentNode;

		btnDom.style.display = 'none';

		ev.stopPropagation();
		ev.preventDefault();
	}

  	render() {
	    return (
	      	<div>
	      		<Navbar/>
				<div className="content">
					<div className="appContainer">
						<div ref="btn" onClick={this.handleClick} className="appBtn">
							<Link to="/msgEdit" className="addPaper"><span className="iconfont">&#xe64a;</span>新建问卷</Link>
						</div>

						{this.props.children}
					</div>
				</div>
	      	</div>
	    );
  	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
// <MsgEdit/>
// <QuestionnaireList/>