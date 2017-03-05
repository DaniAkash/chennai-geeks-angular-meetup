import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "../task.service";
import { Task } from '../../dataTypes/Task';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.task = this.taskService.getTask(+params['id']);
    });
  }

  goBack(): void {
    // this.location.back();
    this.router.navigate(['/']);
  }

}
