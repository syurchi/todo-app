import { Injectable } from '@angular/core';
import { Todo } from './todo.model'
import { TODOS } from './mock-todos'

@Injectable()
export class StubDataService {
  
  constructor() { }
  
  getAllTodos(): Array<Todo> {
    return TODOS;
  }
  
}