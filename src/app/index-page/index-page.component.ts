import { Component } from '@angular/core';
import { MainTaskFormComponent } from '../main-task-form/main-task-form.component';
import { TasksApiService } from '../services/tasks-api/tasks-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
})
export class IndexPageComponent {
  private subscriptionName: Subscription;

  constructor(private taskApiService: TasksApiService) {
    this.subscriptionName = this.taskApiService.getUpdate().subscribe
      (async (message) => { //message contains the data sent from service
        this.mainTasks = await this.taskApiService.getAllTasks();
      });
  }


  public mainTasks: any[] = [];

  async ngOnInit () {
    this.mainTasks = await this.taskApiService.getAllTasks();
  }




}
