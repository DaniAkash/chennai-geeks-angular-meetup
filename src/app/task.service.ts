import { Injectable } from '@angular/core';
import { Task } from "../dataTypes/Task";
import { TASKS } from "../data/tasks";

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    this.tasks = TASKS;
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    this.tasks.push(task);
    return this.tasks;
  }

  deleteTask(id: number): Task[] {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks;
  }
}
