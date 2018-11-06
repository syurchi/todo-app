import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent }  from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-new/todo-new.component';

import { StubDataService } from './shared/stub-data.service';

@NgModule({
  imports:      [ BrowserModule, SharedModule ],
  declarations: [ AppComponent, TodoListComponent, TodoNewComponent ],
  providers:    [ StubDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }