import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
	const [title, setTitle] = useState('')
	const handleFormAddTodoSubmit = event => {
		event.preventDefault()
		addTodo({ id: nanoid(4), title: title, completed: false }).then(() => {
			setTitle('')
		})
	}
	return (
		<div className='todo-form'>
			<form onSubmit={handleFormAddTodoSubmit}>
				<input type='text' value={title} onChange={event => setTitle(event.target.value)} />
				<button type='submit'>Add</button>
			</form>
		</div>
	)
}
