import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: "T1",
      userId: "1",
      title: "Master Angular",
      summary: "Learn all the basic and advanced features of Angular and how to apply them",
      dueDate: "2025-12-31"
    },
    {
      id: "T2",
      userId: "2",
      title: "Build a Portfolio",
      summary: "Create a professional portfolio showcasing your Angular projects and skills",
      dueDate: "2024-06-30"
    },
    {
      id: "T3",
      userId: "3",
      title: "Contribute to Open Source",
      summary: "Find an open-source Angular project and contribute to its development",
      dueDate: "2024-12-31"
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }
}
