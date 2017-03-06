import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors.js';
import { receiveTodo } from '../../actions/todo_actions.js';
import TodoList from './todo_list.jsx';

const MapStateToProps = (state) => ({
  todos: allTodos(state)
});

const MapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(TodoList);
