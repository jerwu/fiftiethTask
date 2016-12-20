import React from 'react'

import Navbar from './Navbar'

class QuestionnaireList extends React.Component{
	render() {
		return (
			<div>
				<Navbar/>
				<div className="ListContainer">
					<ul className="liTitle">
						<li className="title">标题</li>
						<li className="time">时间</li>
						<li className="statu">状态</li>
						<li className="operate">操作</li>
						<li className="addBtn"><button><span className="iconfont">&#xe64a;</span>新建问卷</button></li>
					</ul>
					<div className="listContent">
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="title">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn">删除</button>
									<button className="btn">查看数据</button>
								</li>
							</ul>
						</div>
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="title">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn">删除</button>
									<button className="btn">查看数据</button>
								</li>
							</ul>
						</div>
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="title">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn">删除</button>
									<button className="btn">查看数据</button>
								</li>
							</ul>
						</div>
						<div className="listBottom">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/>全选 <button className="btn deleteBtn">删除</button></li>
								
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}
export default QuestionnaireList;