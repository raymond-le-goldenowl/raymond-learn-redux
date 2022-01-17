import axios from 'axios'
import TodoForm from 'components/TodoForm'
import { addTodo } from 'store/actions/todoListActions'

const { connect } = require('react-redux')

const mapActionsToProps = dispatch => ({
	addTodo: async todoData => {
		await axios.post('https://jsonplaceholder.typicode.com/todos', todoData)
		dispatch(addTodo(todoData))
	}
})

export default connect(null, mapActionsToProps)(TodoForm)
