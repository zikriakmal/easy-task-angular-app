import { Component, Input } from '@angular/core';
// import { TaskComponent } from "./task/task.component";
// import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;

  isAddingTask: boolean = false;

  constructor(private taskService: TaskService) { }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
