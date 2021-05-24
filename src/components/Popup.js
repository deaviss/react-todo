import React, { useState, useEffect } from 'react'
import '../css/popup.css'

export default function Popup(props) {
	const { msg } = props;
	const [show, setShow] = useState(true);

	return (
		<div className="popup">
			<h2>{msg}</h2>
		</div>
	)
}
