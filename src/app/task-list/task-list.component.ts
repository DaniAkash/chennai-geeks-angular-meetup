import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TASKS } from "../../data/TASKS";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = TASKS;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
