import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks = [];

  constructor(private storage: Storage,
              private tasksService: TasksService) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const email = await this.storage.get('email');
    console.log(`El email del usuario es: ${email}`);

    this.tasksService.getTasks(email).subscribe(
      res=>{
        console.log(res);
        this.tasks = res;
      },
      err=>{
        console.log(err);
      }
    );
    
  }

}
