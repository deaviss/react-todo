import React, { useRef, useState } from 'react'
import Popup from './Popup';

export default function AddNewTodo(props) {

	const textRef = useRef(null);
	const [error, setError] = useState(false);

	const addNew = e => {
		const { value } = textRef.current;
		if (value.length > 3) {
			props.cb({ text: value, done: false })
			textRef.current.value = ""
		} else {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		}
	}

	return (
		<div className="newTodoBox">
			<input ref={textRef} type="text" className="newTodoInput" placeholder="Add your new todo" />
			<input type="button" className="todoButton" style={{ width: "40px" }} value="+" onClick={addNew} />
			{error && <Popup msg={"Min. 4 letters"} />}
		</div>
	)
}
