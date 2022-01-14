import Navbar from 'components/Navbar'
import TodoList from 'components/TodoList'

import React from 'react'

export default function App() {
	return (
		<div className='app'>
			<Navbar />
			<TodoList />
		</div>
	)
}
