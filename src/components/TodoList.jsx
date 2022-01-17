import TodoForm from 'containers/TodoForm'
import React, { useEffect } from 'react'

export default function TodoList({ todoList, markComplete, removeTodo, getTodoList }) {
	useEffect(() => {
		getTodoList()
	}, [getTodoList])
	const handleCheckboxChange = id => {
		markComplete(id)
	}

	const handleButtonDeleteClick = id => {
		removeTodo(id)
	}
	return (
		<div className='todo-list'>
			<TodoForm />
			<ul>
				{todoList &&
					todoList.map(todo => {
						return (
							<li key={todo.id}>
								<span className={todo.completed ? 'text-through-line' : ''}>{todo.title}</span>
								<div>
									<input
										type='checkbox'
										checked={todo.completed}
										onChange={() => {
											handleCheckboxChange(todo.id)
										}}
									/>
									<button onClick={() => handleButtonDeleteClick(todo.id)}>Delete</button>
								</div>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
