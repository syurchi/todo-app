import { Component, OnInit } from '@angular/core';

import { StubDataService } from '../shared/stub-data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  
  todoList: Array<Todo>;
  
  constructor(private dataService: StubDataService) { }
  
  ngOnInit() { 
    this.todoList = this.dataService.getAllTodos();
  }
  
}