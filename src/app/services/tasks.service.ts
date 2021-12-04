import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksUrl = "http://127.0.0.1:8000/tasks";

  constructor(private httpClient: HttpClient) { }

  getTasks(user)
  {
    return this.httpClient.post<Task[]>(this.tasksUrl, { email : user });
  }
}
