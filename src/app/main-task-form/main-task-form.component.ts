import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TasksApiService } from '../services/tasks-api/tasks-api.service';

@Component({
  selector: 'app-main-task-form',
  templateUrl: './main-task-form.component.html',
  styleUrls: ['./main-task-form.component.css']
})
export class MainTaskFormComponent {
  constructor(private taskApiService: TasksApiService, private formBuilder: FormBuilder,) { }

  mainTaskForm = this.formBuilder.group({
    details: '',
  });


  async onSubmit () {
    if (!this.mainTaskForm.value.details) return alert('Please enter a task description');
    await this.taskApiService.createMainTask(this.mainTaskForm.value.details);
    this.mainTaskForm.reset();
    this.taskApiService.sendUpdate('update');
  }
}
