import { ADD_TODO, GET_TODO_LIST, MARK_COMPLETE, REMOVE_TODO } from 'store/types/todoTypes'

export const markComplete = id => ({
	type: MARK_COMPLETE,
	payload: id
})

export const removeTodo = id => ({
	type: REMOVE_TODO,
	payload: id
})

export const addTodo = todoData => ({
	type: ADD_TODO,
	payload: todoData
})

export const getTodoList = todoList => ({
	type: GET_TODO_LIST,
	payload: todoList
})
