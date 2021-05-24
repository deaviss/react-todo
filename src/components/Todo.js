import React from 'react'

export default function Todo(props) {

	const todoStyle = {
		backgroundColor: "#cacaca",
		width: "100%",
		padding: "8px",
		fontSize: "2rem"
	};
	const todoStrike = {
		color: "#555",
		textDecoration: "line-through"
	};

	let { text, done } = props;

	const checkDone = (e) => {
		props.cb()
	}

	const deleteTask = e => {
		props.removeTodo()
	}


	return (
		<div className="todo-box">
			<div className="todo-bg" style={todoStyle} onClick={checkDone}>
				<span className="todo-text" style={done ? todoStrike : null}>
					{text}
				</span>
			</div>
			{done && <input type="button" className="todoButton" style={{ width: "40px", background: "#cc1022" }} value="X" onClick={deleteTask} />}
		</div>
	)
}
