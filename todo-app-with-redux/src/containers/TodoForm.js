import TodoForm from 'components/TodoForm'
import { addTodo } from 'store/actions/todoListActions'

const { connect } = require('react-redux')

const mapActionsToProps = dispatch => ({
	addTodo: id => dispatch(addTodo(id))
})

export default connect(null, mapActionsToProps)(TodoForm)
