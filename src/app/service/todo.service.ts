import { Injectable } from '@angular/core';
import { TODOLIST } from '../util/Mock-todo-list';
import { TodoItem } from '../domain/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private firstChangeState = true;
  todoList: Array<TodoItem>;
  addTodoItem(content: string) {
    this.todoList.push(new TodoItem(content, this.todoList.length, false));
    // console.log('todo list content : ' + JSON.stringify(this.todoList));
  }
  toggleTodoComplete(todoItem: TodoItem) {
    const state = todoItem.state;
    todoItem.state = !state;
  }
  getDefaultTodoList() {
    return TODOLIST;
  }
  removeTodo(todoItem: TodoItem) {
    this.todoList.forEach((item, index) => {
      if (item === todoItem) {
        this.todoList.splice(index, 1);
      }
    });
  }
  changeAllTodoItem() {
    this.todoList.forEach(item => (item.state = this.firstChangeState));
    this.firstChangeState = !this.firstChangeState;
  }
  constructor() {
    this.todoList = this.getDefaultTodoList().slice();
  }
}
