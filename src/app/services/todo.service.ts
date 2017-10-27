import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    let todos = this.getTodos();

    // if no todos, nextId is 0,
    // otherwise set to 1 more than last todo id
    if (todos.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId + 1;
    }
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    let todos = this.getTodos();
    todos.push(todo);

    // save the todos to local storage
    this.setLocalStorageTodos(todos);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos == null ? [] : todos.todos;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter((todo)=> todo.id != id);
    this.setLocalStorageTodos(todos);
  }

  // private function to help save to local storage
  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }
}
