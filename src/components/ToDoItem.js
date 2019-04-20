/* eslint-disable no-invalid-this */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * React component
 */
export class ToDoItem extends Component {
  /**
   * Gets style of To-Do Item component
   * @return {object} Style for Item component
   */
  getToDoStyle = () => {
    return {
      backgroundColor: '#eee',
      borderBottom: '1px #aaa solid',
      height: '30px',
      lineHeight: '30px',
      padding: '1rem',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  /**
   * Gets checkbox state
   * @return {Boolean} Is checked
   */
  getCheckBoxState = () => {
    return this.props.todo.completed ? true : false;
  };

  /**
   * Renders the component.
   * @return {string} HTML markup for the component
   */
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getToDoStyle()}>
        <label>
          <input
            checked={this.getCheckBoxState()}
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{' '}
          {title}
        </label>
        <button style={btnStyle} onClick={this.props.deleteToDo.bind(this, id)}>
          &#10799;
        </button>
      </div>
    );
  }
}

const btnStyle = {
  background: '#9A1515',
  border: '1px solid #9A1515',
  borderRadius: '100%',
  color: '#fff',
  cursor: 'pointer',
  float: 'right',
  lineHeight: '22px',
  padding: '4px 10px',
  textAlign: 'center',
};

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoItem;
