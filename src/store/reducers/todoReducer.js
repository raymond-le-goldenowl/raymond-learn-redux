import { ADD_TODO, GET_TODO_LIST, MARK_COMPLETE, REMOVE_TODO } from 'store/types/todoTypes'

const initialState = {
	todoList: [
		{ id: 1, title: 'eat', completed: false },
		{ id: 2, title: 'sleep', completed: true },
		{ id: 3, title: 'code', completed: false }
	]
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODO_LIST: {
			return { ...state, todoList: action.payload }
		}
		case MARK_COMPLETE: {
			return {
				...state,
				todoList: state.todoList.map(todo => {
					if (todo.id === action.payload) {
						return { ...todo, completed: !todo.completed }
					}
					return todo
				})
			}
		}

		case REMOVE_TODO:
			const newTodoList = state.todoList.filter(todo => todo.id !== action.payload)
			return { ...state, todoList: newTodoList }

		case ADD_TODO:
			return { ...state, todoList: [...state.todoList, action.payload] }

		default:
			return state
	}
}

export default todoReducer
