import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputTodoItemComponent } from './input-todo-item/input-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
