/* eslint-disable no-invalid-this */
import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';

import axios from 'axios';

import './App.css';

/**
 * react component
 */
class App extends Component {
  state = {
    todos: [],
  };

  /**
   * Gets data from https://jsonplaceholder.typicode.com/todos (limits to 10 ToDos)
   */
  componentDidMount() {
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => this.setState({todos: response.data}));
  }

  /**
   * Toggles state of a ToDo (completed / not completed)
   * @param {string} id of a ToDo that was changed
   */
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  /**
   * Deletes ToDo
   * @param {string} id of a ToDo to be deleted
   */
  deleteToDo = (id) => {
    axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
          this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
          });
        });
  };

  /**
   * Adds new ToDo
   * @param {string} title of a new ToDo to be added
   */
  addToDo = (title) => {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false,
        })
        .then((response) => {
          this.setState({todos: [...this.state.todos, response.data]});
        });
  };

  /**
   * Renders the component.
   * @return {string} HTML markup for the component
   */
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo} />
                  <ToDos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteToDo={this.deleteToDo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
