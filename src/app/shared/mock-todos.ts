import { Todo } from './todo.model';
import { TodoStatusEnum } from './todo-status.enum';

export const TODOS: Todo[] = [
  { id: 1, desc: "what to do...", status: TodoStatusEnum.INCOMPLETE },
  { id: 2, desc: "build a todo app", status: TodoStatusEnum.COMPLETE },
  { id: 3, desc: "visit the moon", status: TodoStatusEnum.INCOMPLETE }
];