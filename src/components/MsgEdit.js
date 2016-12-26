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
			<div className="singleQuestion question" value={this.props.index}>
				<h4>Q{this.props.index} <input type="text" placeholder="单选题"/></h4>
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
			<div className="multiQuestion question" value={this.props.index}>
				<h4>Q{this.props.index} <input type="text" placeholder="多选题"/></h4>
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
			<div className="TextQuestion question" value={this.props.index}>
				<h4>Q{this.props.index} <input type="text" placeholder="文本题"/></h4>
				<div className="multiCheck"><input type="checkBox"/>此题是否必填</div>
				<textarea rows="6" cols="60"></textarea>
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
			questionListArr: [],
			key: 0
		};
		// this.key = 0;
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
	/*
	 *通过DOM操作来移动、复用、删除问题
	 *存在的问题：过渡以来DOM操作，不符合React的设计思想
	 *			  复用时采用节点克隆操作，即使时深复制仍然无法物质节点的事件处理程序
	 */
	// moveUp = ev => {
	// 	alert('moveUp');
	// 	let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
	// 		currentNode = ev.target.parentNode.parentNode,
	// 		questionListArr = this.state.questionListArr,
	// 		index = currentNode.getAttribute('data-value');
	// 	if (questionListDom.firstChild != currentNode) {
	// 		// questionListDom.insertBefore(currentNode,currentNode.previousSibling);
	// 		questionListArr.splice(index-2,0,questionListArr[index-1]);
	// 		questionListArr.splice(questionListArr[index],0,);
	// 	}
	// 	this.setState({
	// 		questionListArr:questionListArr
	// 	});
	// 	ev.stopPropagation();
	// 	ev.preventDefault();
	// }

	// moveUp = ev => {
	// 	alert('moveUp');
	// 	let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
	// 		currentNode = ev.target.parentNode.parentNode;
	// 	if (questionListDom.firstChild != currentNode) {
	// 		 questionListDom.insertBefore(currentNode,currentNode.previousSibling);
	// 	}
	// 	ev.stopPropagation();
	// 	ev.preventDefault();
	// }

	// moveDown = () => {
	// 	let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
	// 		currentNode = ev.target.parentNode.parentNode;
	// 	if (questionListDom.lastChild == currentNode || questionListDom.childNodes.length ==1) {
	// 		alert('can\'t moveDown');
	// 	}
	// 	else{
	// 		questionListDom.insertBefore(currentNode,currentNode.nextSibling.nextSibling);
	// 	}

	// 	ev.stopPropagation();
	// 	ev.preventDefault();
	// }

	// reUse = ev => {
	// 	let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
	// 		currentNode = ev.target.parentNode.parentNode,
	// 		cloneNodes = currentNode.cloneNode(true);		//无法克隆子节点的事件处理程序，jquery的$().clone(true)可以

	// 		questionListDom.insertBefore(cloneNodes,currentNode.nextSibling);
	// 	ev.stopPropagation();
	// 	ev.preventDefault();
	// }

	// deleteQuestion = ev => {
	// 	alert('deleteQuestion');
	// 	let questionListDom = ReactDom.findDOMNode(this.refs.questionList),
	// 		currentNode = ev.target.parentNode.parentNode;
	// 	questionListDom.removeChild(currentNode);

	// 	ev.stopPropagation();
	// 	ev.preventDefault();
	// }

	/*
	 *存在问题：
	 *1、上移：把Q2上移到Q1位置后，Q1处于Q2原先的位置不能再上移
	 *2、复用：一、复用后的问题不会更改顺序；二、复用后再删除问题，会把复用出来的问题连同原问题一并删除，不管复用的多少个
	 */
	moveUp = (ev) => {
		alert('moveUp');
		
		let	questionListArr = this.state.questionListArr,
			index = ev.target.parentNode.parentNode.getAttribute('value');
			alert(index);
		if (questionListArr.length != 1) {
			let node = questionListArr.splice(index-1,1);
			questionListArr.splice(index-2,0,node);
		}
		this.setState({
			questionListArr:questionListArr
		});
	}

	moveDown = (ev) => {
		alert('moveDown');
		let	questionListArr = this.state.questionListArr,
			index = ev.target.parentNode.parentNode.getAttribute('value');
			// index = this.state.key;
			alert(index);
		if (questionListArr.length == 1 || index == questionListArr.length) {
			alert('can\'t moveDown');
		}else{
			let node = questionListArr.splice(index-1,1);
			questionListArr.splice(index,0,node);
		}
		this.setState({
			questionListArr:questionListArr
		});
	}

	reUse = (ev) => {
		alert('reUse');
		let	questionListArr = this.state.questionListArr,
			index = ev.target.parentNode.parentNode.getAttribute('value');
		if (questionListArr.length != 1) {
			let node = questionListArr.splice(index-1,1);
			questionListArr.splice(index-1,0,[node,node]);
		}
		this.setState({
			questionListArr:questionListArr
		});
	}
	deleteQuestion = ev => {
		alert('deleteQuestion');
		let	questionListArr = this.state.questionListArr,
			index = ev.target.parentNode.parentNode.getAttribute('value');
		questionListArr.splice(index-1,1)

		this.setState({
			questionListArr:questionListArr
		});
	}

	

	addRadioBox = () => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<SingleQuestion 	key={++this.state.key}
												index={questionListArr.length+1}
												moveUp={this.moveUp}
												moveDown={this.moveDown}
												reUse={this.reUse}
												deleteQuestion={this.deleteQuestion}/>)
		

		this.setState({
			questionListArr:questionListArr
		});
	}

	addCheckBox = () => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<MultiQuestion 	key={++this.state.key}
												index={questionListArr.length+1}
												moveUp={this.moveUp}
												moveDown={this.moveDown}
												reUse={this.reUse}
												deleteQuestion={this.deleteQuestion}/>)
		
		
		this.setState({
			questionListArr:questionListArr
		});
	}

	addTextBox = () => {
		let questionListArr = this.state.questionListArr;
		questionListArr.push(<TextQuestion  	key={++this.state.key}
												index={questionListArr.length+1}
												moveUp={this.moveUp}
												moveDown={this.moveDown}
												reUse={this.reUse}
												deleteQuestion={this.deleteQuestion}/>)
		
		
		this.setState({
			questionListArr:questionListArr
		});
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
