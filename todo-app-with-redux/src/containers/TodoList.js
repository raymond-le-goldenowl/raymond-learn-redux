import TodoList from 'components/TodoList'
import { markComplete, removeTodo } from 'store/actions/todoListActions'

const { connect } = require('react-redux')

const mapStateToProps = state => ({
	todoList: state.todoReducer.todoList
})

const mapActionsToProps = dispatch => ({
	markComplete: id => dispatch(markComplete(id)),
	removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapActionsToProps)(TodoList)
