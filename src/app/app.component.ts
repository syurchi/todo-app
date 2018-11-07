import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
      `<todo-new></todo-new>
      <todo-list></todo-list>`
})
export class AppComponent {

  constructor() { }

}