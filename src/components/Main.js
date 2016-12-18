require('normalize.css/normalize.css');
require('styles/App.css');
// require('styles/boostrap.min.css');
// require('bootstrap')

import React from 'react';

//import Link component
import { Link } from 'react-router'

import Navbar from './Navbar'

class AppComponent extends React.Component {
  render() {
    return (
      	<div>
      		<Navbar/>
			<div className="content">
				<div className="container">
					<button className="btn btn-default">
						<Link to="/MsgEdit"><span className="glyphicon glyphicon-plus"></span>新建问卷</Link>
					</button>

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
