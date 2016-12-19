require('normalize.css/normalize.css');
require('styles/App.scss')

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render(){
		return (
			<div className="navbar">
				<nav className="container">
					<Link to="/" className="paperMg">
						<span className="iconfont">&#xe6a8;</span>	问卷管理
					</Link>
					<Link to="/">我的问卷</Link>
				</nav>
			</div>
		);
	}
})