/* eslint-disable no-invalid-this */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * React component
 */
export class AddToDo extends Component {
  state = {
    title: '',
  };

  /**
   * Updates State of AddToDo component
   * @param {object} e Event
   */
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Submits form
   * @param {object} e Event
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({title: ''});
  };

  /**
   * Renders the component.
   * @return {string} HTML markup for the component
   */
  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{display: 'flex', margin: '1rem 0'}}
      >
        <input
          name="title"
          onChange={this.onChange}
          placeholder="Add To-Do"
          style={{flex: '10', padding: '1rem 1.5rem'}}
          type="text"
          value={this.state.title}
        />
        <input
          className="btn"
          style={{flex: '1'}}
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDo;
