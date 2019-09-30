import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface FetchTodosAction {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FetchTodos,
      payload: response.data
    });
  };
};

export interface DeleteTodoAction {
  type: ActionTypes.DeleteTodo;
  payload: number;
}
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DeleteTodo,
    payload: id
  };
};
