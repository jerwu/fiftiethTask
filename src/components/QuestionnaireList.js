import React from 'react'

import { Link } from 'react-router'

import Navbar from './Navbar'

class QuestionnaireList extends React.Component{
	listDelete = ev => {
		let result = confirm('确认要删除此问卷？');
		if (result) {
			alert('delete');
		}else{
			alert('not delete');
		}

		ev.stopPropagation();
		ev.preventDefault();
	}

	render() {
		return (
			<div>
				<Navbar/>
				<div className="ListContainer">
					<ul className="liTitle">
						<li className="msgTitle">标题</li>
						<li className="time">时间</li>
						<li className="statu">状态</li>
						<li className="operate">操作</li>
						<li className="addBtn"><Link to="/app"><button><span className="iconfont">&#xe64a;</span>新建问卷</button></Link></li>
					</ul>
					<div className="listContent">
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="msgTitle">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn" ref="listDelete" onClick={this.listDelete}>删除</button>
									<button className="btn"><Link to="/dataCheck">查看数据</Link></button>
								</li>
							</ul>
						</div>
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="msgTitle">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn" ref="listDelete" onClick={this.listDelete}>删除</button>
									<button className="btn"><Link to="/dataCheck">查看数据</Link></button>
								</li>
							</ul>
						</div>
						<div className="list">
							<ul className="liTitle">
								<li className="radio"><input type="radio"/></li>
								<li className="msgTitle">这是我的第一份问卷</li>
								<li className="time">2016-04-12 20:46:52</li>
								<li className="statu">发布中</li>
								<li className="btnContainer">
									<button className="btn">编辑</button>
									<button className="btn" ref="listDelete" onClick={this.listDelete}>删除</button>
									<button className="btn"><Link to="/dataCheck">查看数据</Link></button>
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