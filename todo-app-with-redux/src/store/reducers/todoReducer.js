const initialState = {
	todoList: [
		{ id: 1, title: 'eat', completed: false },
		{ id: 2, title: 'sleep', completed: true },
		{ id: 3, title: 'code', completed: false }
	]
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'todo/markComplete': {
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

		case 'todo/removeTodo':
			const newTodoList = state.todoList.filter(todo => todo.id !== action.payload)
			return { ...state, todoList: newTodoList }

		case 'todo/addTodo':
			return { ...state, todoList: [...state.todoList, action.payload] }

		default:
			return state
	}
}

export default todoReducer
