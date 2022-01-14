export const markComplete = id => ({
	type: 'todo/markComplete',
	payload: id
})

export const removeTodo = id => ({
	type: 'todo/removeTodo',
	payload: id
})
