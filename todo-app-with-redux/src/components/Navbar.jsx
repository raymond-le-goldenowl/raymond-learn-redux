import React from 'react'

export default function Navbar({ todoList }) {
	return (
		<div className='navbar'>
			<h1>Redux Todo-app</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Total todos: {todoList && todoList.length}</li>
			</ul>
		</div>
	)
}
