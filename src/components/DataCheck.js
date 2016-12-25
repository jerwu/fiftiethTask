import React from 'react'

import { Link } from 'react-router'

import Navbar from './Navbar'

export default React.createClass({
	render(){
		return (
			<div>
				<Navbar/>
				<div className="dataCheckContainer">
					<div className="dc_title">
						<div className="dc_title_wrapper">
							<Link to='/' className="backToHome"><span className="iconfont">&#xe604;</span>返回</Link>
							<h1>这里是标题</h1>
							<p>此统计分析只包含完整回收的数据</p>
						</div>
					</div>

					<div className="dc_content">
						<div className="listBlock">
							<h4>Q1 单选题</h4>
							<ul>
								<div className="dataProportion">数据占比</div>
								<li>选项一 <div className="dataBar"><input type="range" min="0" max="100" value="85"/>85%</div></li>
								<li>选项二<div className="dataBar"><input type="range" min="0" max="100" value="15"/>15%</div></li>
							</ul>
						</div>
						<div className="listBlock">
							<h4>Q2 多选题</h4>
							<ul>
								<div className="dataProportion">数据占比</div>
								<li>选项一 <div className="dataBar"><input type="range" min="0" max="100" value="85"/>85%</div></li>
								<li>选项二<div className="dataBar"><input type="range" min="0" max="100" value="15"/>15%</div></li>
							</ul>
						</div>
						<div className="listBlock">
							<h4>Q3 单选题</h4>
							<ul>
								<div className="dataProportion">数据占比</div>
								<li>选项一 <div className="dataBar"><input type="range" min="0" max="100" value="85"/>85%</div></li>
								<li>选项二<div className="dataBar"><input type="range" min="0" max="100" value="15"/>15%</div></li>
							</ul>
						</div>
						<div className="listBlock">
							<h4>Q4 文本题</h4>
							<ul>
								<div className="dataProportion">数据占比</div>
								<li>&nbsp;<div className="dataBar"><input type="range" min="0" max="100" value="85"/>85%</div></li>
							</ul>
						</div>
							
					</div>
					
					<div className="dc_bottom">
						<Link to='/' className="backToHome"><span className="iconfont">&#xe604;</span>返回</Link>
					</div>
				</div>
			</div>
		);
	}
})