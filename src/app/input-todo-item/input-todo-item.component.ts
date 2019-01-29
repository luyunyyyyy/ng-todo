import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-input-todo-item',
  templateUrl: './input-todo-item.component.html',
  styleUrls: ['./input-todo-item.component.css']
})
export class InputTodoItemComponent implements OnInit {
  // todoService: TodoService;
  constructor(private todoService: TodoService) {
    // this.todoService = todoService;
  }
  currentTodoItemContent: string;
  onEnter(value: string) {
    this.currentTodoItemContent = value;
    this.todoService.addTodoItem(value);
    console.log('监听到回车, 设置当前todo内容');
  }
  ngOnInit() {}
  onClickCloseAllTodoItem() {
    this.todoService.changeAllTodoItem();
    console.log('监听到点击按钮, 设置所有todo状态为完成');
  }
}
