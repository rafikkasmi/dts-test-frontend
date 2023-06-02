import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

import { TasksApiService } from '../services/tasks-api/tasks-api.service';


@Component({
  selector: 'app-jira-task-form',
  templateUrl: './jira-task-form.component.html',
  styleUrls: ['./jira-task-form.component.css']
})
export class JiraTaskFormComponent {
  constructor(private taskApiService: TasksApiService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  mainTaskId: string = this.route.snapshot.paramMap.get('id') || '0'
  ngOnInit (): void {
    this.mainTaskId = this.route.snapshot.paramMap.get('id') || '0'
  }

  jiraTaskForm = this.formBuilder.group({
    summary: '',
    description: '',
    assignee: '',
  });


  async onSubmit () {
    if (!this.mainTaskId || !this.jiraTaskForm.value.summary || !this.jiraTaskForm.value.description || !this.jiraTaskForm.value.assignee) return alert('Please enter everything');
    const { summary, description, assignee } = this.jiraTaskForm.value;
    await this.taskApiService.createJiraTask(this.mainTaskId, summary, description, assignee, 'High');
    this.jiraTaskForm.reset();
    this.taskApiService.sendUpdate('update');
  }
}
