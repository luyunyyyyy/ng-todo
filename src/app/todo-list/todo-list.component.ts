import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TodoItem } from '../domain/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todoService: TodoService;
  // todoList: Array<TodoItem>;
  get todoList() {
    return this.todoService.todoList;
  }
  constructor(private todoService: TodoService) {}
  toggleTodoComplete(todoItem: TodoItem) {
    this.todoService.toggleTodoComplete(todoItem);
  }
  removeTodo(todoItem: TodoItem) {
    this.todoService.removeTodo(todoItem);
  }
  ngOnInit() {}
}
