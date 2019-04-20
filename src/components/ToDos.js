import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

/**
 * React component
 */
class ToDos extends Component {
  /**
   * Renders the component.
   * @return {string} HTML markup for the component
   */
  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        deleteToDo={this.props.deleteToDo}
      />
    ));
  }
}

ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDos;
