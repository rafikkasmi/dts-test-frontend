import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, Subject } from 'rxjs';
const API_URL = 'https://dts-jira-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor() { }

  async getAllTasks () {
    const response = await axios.get(`${API_URL}/get-all-main-tasks`);
    return response.data;
  }

  async getMainTaskById (id: string) {
    const response = await axios.get(`${API_URL}/get-main-task-by-id/${id}`);
    return response.data;
  }

  async createMainTask (details: string) {
    const response = await axios.post(`${API_URL}/create-main-task`, { details });
    return response.data;
  }

  async createJiraTask (mainTaskId: string, summary: string, description: string, assignee: string, priority: string) {
    const response = await axios.post(`${API_URL}/create-jira-task/${mainTaskId}`, { summary, description, assignee, priority });
    return response.data;
  }

  //send updates between components
  private subjectName = new Subject<any>();
  sendUpdate (message: string) { //the component that wants to update something, calls this fn
    this.subjectName.next({ text: message }); //next() will feed the value in Subject
  }
  getUpdate (): Observable<any> { //the receiver component calls this function 
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

}
