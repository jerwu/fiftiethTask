// require('bootstrap')

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render(){
		return (
			<div>
				<nav className="navbar navbar-default">
					<Link to="/">问卷管理</Link>
					<Link to="/">我的问卷</Link>
				</nav>
			</div>
		);
	}
})