export const markComplete = id => ({
	type: 'todo/markComplete',
	payload: id
})

export const removeTodo = id => ({
	type: 'todo/removeTodo',
	payload: id
})

export const addTodo = todoData => ({
	type: 'todo/addTodo',
	payload: todoData
})

export const getTodoList = todoList => ({
	type: 'todo/getTodoList',
	payload: todoList
})
