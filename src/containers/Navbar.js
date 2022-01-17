import Navbar from 'components/Navbar'

const { connect } = require('react-redux')

const mapStateToProps = state => ({
	todoList: state.todoReducer.todoList
})

export default connect(mapStateToProps, null)(Navbar)
