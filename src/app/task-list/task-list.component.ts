import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TASKS } from "../../data/TASKS";
import {Task} from "../../dataTypes/Task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Task[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

}
