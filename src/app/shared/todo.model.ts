import { TodoStatusEnum } from './todo-status.enum';

// This represents a simple Todo object
export class Todo {
  id: number;
  desc: string;
  status: TodoStatusEnum;
  
  constructor(id: number, desc: string, status: TodoStatusEnum) {
    this.id = id;
    this.desc = desc;
    this.status = status;
  }
}