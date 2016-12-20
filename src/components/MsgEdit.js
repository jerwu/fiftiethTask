require('normalize.css/normalize.css');
require('styles/App.scss');

// 引入日期组件
// import { DateRange } from 'react-date-range';

import React from 'react'
// import ReactDom from 'react-dom';

class MsgEdit extends React.Component{
	addQuestion = (ev) => {
		// let addQuestionBtn = ReactDom.findDOMNode(this.refs.question),
		// 	questionContentDom = addQuestionBtn.parentNode;

		// questionContentDom.insertBefore(questionContentDom.firstChild,)
		// addQuestionBtn.style.display = "none";
		alert('add questions');
		// console.log('aaa');

		ev.stopPropagation();
		ev.preventDefault();
	}

	render(){
		return (
			<div className="paperEdit">
				<div className="title">
					<input type="text" className="paperTitle" placeholder="这里是标题"/>
				</div>

				<div className="questionContent">
					<div className="questionList">
						<div className="question1 question">
							<h4>Q1 单选题</h4>
							<ul>
								<li><input type="radio" className="quesRadio"/>选项一</li>
								<li><input type="radio" className="quesRadio"/>选项二</li>
							</ul>
							<div className="moveBtn">
								<a href="javascript:;">上移</a>
								<a href="javascript:;">下移</a>
								<a href="javascript:;">复用</a>
								<a href="javascript:;">删除</a>
							</div>
						</div>
						<div className="question1 question">
							<h4>Q2 多选题</h4>
							<ul>
								<li><input type="checkBox" />选项一</li>
								<li><input type="checkBox" />选项二</li>
								<li><input type="checkBox" />选项三</li>
								<li><input type="checkBox" />选项四</li>
							</ul>
							<div className="moveBtn">
								<a href="javascript:;">上移</a>
								<a href="javascript:;">下移</a>
								<a href="javascript:;">复用</a>
								<a href="javascript:;">删除</a>
							</div>
						</div>
						<div className="question1 question">
							<h4>Q2 多选题</h4>
							<div className="multiCheck"><input type="checkBox"/>此题是否必填</div>
							<input type="text"/>
						</div>
					</div>
					<div className="questionOperate">
						<div className="optionsBar">
							<button className="radioBtn"><span className="iconfont">&#xe6cc;</span>单选</button>
							<button className="multiCheckBtn"><span className="iconfont">&#xe62a;</span>多选</button>
							<button className="textBtn"><span className="iconfont">&#xe600;</span>文本题</button>
						</div>
						<div className="paperQuestion" onClick={this.addQuestion} ref="question">
							<span className="iconfont">&#xe64a;</span>添加问题
						</div>
					</div>
				</div>
				
				<div className="paperBottom">
					<div className="deadline">
						问卷截止日期<input type="date" className="date" defaultValue="2017-01-15" name="deadline"/>
					</div>
					<div className="paperFinished">
						<input type="button" className="savePaper" value="保存问卷"/>
						<input type="button" className="commitPaper" value="提交问卷"/>
					</div>
				</div>
			</div>
		);
	}
}

export default MsgEdit;
