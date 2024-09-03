import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  @Input({ required: true }) userId!: string;

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService)

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);

    this.onClose();
  }
}
