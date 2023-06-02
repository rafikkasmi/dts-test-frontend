import { Component } from '@angular/core';
import { TasksApiService } from '../services/tasks-api/tasks-api.service';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

interface JiraTask {
  task_id: string
  summary: string
  assignee: string
}
interface MainTask {
  id: string
  details: string
  jira_tasks?: JiraTask[]
}


@Component({
  selector: 'app-main-task-page',
  templateUrl: './main-task-page.component.html',
  styleUrls: ['./main-task-page.component.css']
})
export class MainTaskPageComponent {
  private subscriptionName: Subscription;

  constructor(private taskApiService: TasksApiService, private route: ActivatedRoute) {
    this.subscriptionName = this.taskApiService.getUpdate().subscribe
      (async (message) => { //message contains the data sent from service
        this.mainTask = await this.taskApiService.getMainTaskById(this.mainTaskId);
      });
  }
  mainTaskId: string = this.route.snapshot.paramMap.get('id') || '0'

  public mainTask: MainTask = null as any as MainTask;

  async ngOnInit () {
    this.mainTask = await this.taskApiService.getMainTaskById(this.mainTaskId);
  }



}
