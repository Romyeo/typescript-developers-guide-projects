import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../store/actions';
import { StoreState } from '../store/reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class App extends Component<AppProps> {
  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onListItemClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] | JSX.Element {
    if (!this.props.todos) {
      return <p>No tasks</p>;
    }

    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onListItemClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Get tasks</button>
        {this.state.fetching ? <p>Loading...</p> : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);
