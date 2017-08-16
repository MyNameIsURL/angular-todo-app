import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoService: TodoService) {
  }
}
