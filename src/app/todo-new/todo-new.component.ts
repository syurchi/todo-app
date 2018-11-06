import { Component, OnInit } from '@angular/core';

import { StubDataService } from '../shared/stub-data.service';

@Component({
  selector: 'todo-new',
  templateUrl: './todo-new.component.html'
})
export class TodoNewComponent implements OnInit {

  constructor(private dataService: StubDataService) { }

  ngOnInit() {
  }

}