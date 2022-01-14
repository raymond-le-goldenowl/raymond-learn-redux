import axios from 'axios'
import TodoList from 'components/TodoList'
import { getTodoList, markComplete, removeTodo } from 'store/actions/todoListActions'

const { connect } = require('react-redux')

const mapStateToProps = state => ({
	todoList: state.todoReducer.todoList
})

const mapActionsToProps = dispatch => ({
	markComplete: id => dispatch(markComplete(id)),
	removeTodo: id => dispatch(removeTodo(id)),
	getTodoList: async () => {
		const resTodoList = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=4')
		dispatch(getTodoList(resTodoList.data))
	}
})

export default connect(mapStateToProps, mapActionsToProps)(TodoList)
