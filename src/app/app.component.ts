import { Component } from '@angular/core';
import { TASKS } from '../data/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task List:';
  tasks = TASKS;
}
