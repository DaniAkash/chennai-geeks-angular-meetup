import { Injectable } from '@angular/core';
import { Task } from "../dataTypes/Task";
import { TASKS } from "../data/TASKS";

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    this.tasks = TASKS;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks[id];
  }

  addTask(taskName: string): void {
    this.tasks.push({id: this.tasks.length+1, name: taskName, priority: 'High'});
  }

  deleteTask(id: number): Task[] {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks;
  }
}
