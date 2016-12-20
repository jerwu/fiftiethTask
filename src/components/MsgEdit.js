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
					<div className="questionOperate">
						<div className="optionsBar">
							<div className="radioBtn"><span className="iconfont">&#xe6cc;</span>单选</div>
							<div className="multiCheckBtn"><span className="iconfont">&#xe62a;</span>多选</div>
							<div className="textBtn"><span className="iconfont">&#xe600;</span>文本题</div>
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
