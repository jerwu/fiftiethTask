require('normalize.css/normalize.css');
require('styles/App.scss');

// 引入日期组件
// import { DateRange } from 'react-date-range';

import { Link } from 'react-router'

import React from 'react'
import ReactDom from 'react-dom';

class SingleQuestion extends React.Component{
	render() {
		return (
			<div className="singleQuestion question">
				<h4>Q1 <input type="text" placeholder="单选题"/></h4>
				<ul>
					<li><input type="radio" className="quesRadio"/><input type="text" placeholder="选项一"/></li>
					<li><input type="radio" className="quesRadio"/><input type="text" placeholder="选项二"/></li>
				</ul>
				<div className="moveBtn">
					<a href="javascript:;" onClick={this.props.moveUp}>上移</a>
					<a href="javascript:;" onClick={this.props.moveDown}>下移</a>
					<a href="javascript:;" onClick={this.props.reUse}>复用</a>
					<a href="javascript:;" onClick={this.props.deleteQuestion}>删除</a>
				</div>
			</div>
		);
	}
}

class MultiQuestion extends React.Component{
	render() {
		return (
			<div className="multiQuestion question">
				<h4>Q2 <input type="text" placeholder="多选题"/></h4>
				<ul>
					<li><input type="checkBox" /><input type="text" placeholder="选项一"/></li>
					<li><input type="checkBox" /><input type="text" placeholder="选项二"/></li>
					<li><input type="checkBox" /><input type="text" placeholder="选项三"/></li>
					<li><input type="checkBox" /><input type="text" placeholder="选项四"/></li>
				</ul>
				<div className="moveBtn">
					<a href="javascript:;" onClick={this.props.moveUp}>上移</a>
					<a href="javascript:;" onClick={this.props.moveDown}>下移</a>
					<a href="javascript:;" onClick={this.props.reUse}>复用</a>
					<a href="javascript:;" onClick={this.props.deleteQuestion}>删除</a>
				</div>
			</div>
		);
	}
}

class TextQuestion extends React.Component{
	render() {
		return (
			<div className="TextQuestion question">
				<h4>Q2 多选题</h4>
				<div className="multiCheck"><input type="checkBox"/>此题是否必填</div>
				<input type="text"/>
				<div className="moveBtn">
					<a href="javascript:;" onClick={this.props.moveUp}>上移</a>
					<a href="javascript:;" onClick={this.props.moveDown}>下移</a>
					<a href="javascript:;" onClick={this.props.reUse}>复用</a>
					<a href="javascript:;" onClick={this.props.deleteQuestion}>删除</a>
				</div>
			</div>
		);
	}
}

class MsgEdit extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			questionListArr: []
		}
	}

	addQuestion = (ev) => {

		let optionsBarDom = ReactDom.findDOMNode(this.refs.optionsBar);
		optionsBarDom.className = 'optionsBar';
		// optionsBarDom.classList.remove('optionsBarHide')		//html5的classList属性

		ev.stopPropagation();
		ev.preventDefault();
	}

	publishPaper = () => {
		let result = confirm('是否发布问卷？\n (此问卷截止日期为2017-01-15)')
		if (result) {
			alert('publish');
		}else{
			alert('not publish');
		}
	}

	moveUp = ev => {
		alert('moveUp');
		let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
			currentNode = ev.target.parentNode.parentNode;
		if (questionListDom.firstChild != currentNode) {
			questionListDom.insertBefore(currentNode,currentNode.previousSibling);
		}
		
		ev.stopPropagation();
		ev.preventDefault();
	}

	moveDown = ev => {
		alert('moveDown');
		let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
			currentNode = ev.target.parentNode.parentNode;
		if (questionListDom.lastChild == currentNode || questionListDom.childNodes.length ==1) {
			alert('can\'t moveDown');
		}
		else{
			questionListDom.insertBefore(currentNode,currentNode.nextSibling.nextSibling);
		}

		ev.stopPropagation();
		ev.preventDefault();
	}

	reUse = ev => {
		alert('reUse');
		let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
			currentNode = ev.target.parentNode.parentNode,
			cloneNodes = currentNode.cloneNode(true);		//无法克隆子节点的事件处理程序，jquery的$().clone(true)可以

			questionListDom.insertBefore(cloneNodes,currentNode.nextSibling);
		ev.stopPropagation();
		ev.preventDefault();
	}

	deleteQuestion = ev => {
		alert('deleteQuestion');
		let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
			currentNode = ev.target.parentNode.parentNode;
		questionListDom.removeChild(currentNode);

		ev.stopPropagation();
		ev.preventDefault();
	}

	addRadioBox = ev => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<SingleQuestion key={questionListArr.length-1} moveUp={this.moveUp} moveDown={this.moveDown} reUse={this.reUse} deleteQuestion={this.deleteQuestion}/>)
		

		this.setState({
			questionListArr:questionListArr
		});
		ev.stopPropagation();
		ev.preventDefault();
	}

	addCheckBox = ev => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<MultiQuestion key={questionListArr.length-1} moveUp={this.moveUp} moveDown={this.moveDown} reUse={this.reUse} deleteQuestion={this.deleteQuestion}/>)
		
		
		this.setState({
			questionListArr:questionListArr
		});
		ev.stopPropagation();
		ev.preventDefault();
	}

	addTextBox = ev => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<TextQuestion key={questionListArr.length-1} moveUp={this.moveUp} moveDown={this.moveDown} reUse={this.reUse} deleteQuestion={this.deleteQuestion}/>)
		
		
		this.setState({
			questionListArr:questionListArr
		});
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
					<div className="questionList" ref="questionList">
						{this.state.questionListArr}
					</div>
					<div className="questionOperate">
						<div className="optionsBar optionsBarHide" ref="optionsBar">
							<button className="radioBtn" onClick={this.addRadioBox}><span className="iconfont">&#xe6cc;</span>单选</button>
							<button className="multiCheckBtn"onClick={this.addCheckBox}><span className="iconfont">&#xe62a;</span>多选</button>
							<button className="textBtn"onClick={this.addTextBox}><span className="iconfont">&#xe600;</span>文本题</button>
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
						<Link to='/' type="button" className="publishPaper" onClick={this.publishPaper} value="发布问卷">发布问卷</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MsgEdit;
