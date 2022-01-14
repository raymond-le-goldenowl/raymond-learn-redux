import Navbar from 'containers/Navbar'
import TodoList from 'containers/TodoList'

import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'

export default function App() {
	return (
		<Provider store={store}>
			<div className='app'>
				<Navbar />
				<TodoList />
			</div>
		</Provider>
	)
}
