import React, { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'sleep', completed: false },
		{ id: 2, title: 'sleep', completed: true },
		{ id: 3, title: 'sleep', completed: false }
	])

	return (
		<div className='todo-list'>
			<TodoForm />
			<ul>
				{todoList.map(todo => {
					return (
						<li key={todo.id}>
							<span className={todo.completed ? 'text-through-line' : ''}>{todo.title}</span>
							<div>
								<input type='checkbox' />
								<button>Delete</button>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
