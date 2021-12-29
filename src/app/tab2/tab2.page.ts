import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/User';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  users: User[];

  constructor(private profileService: ProfileService,
    private storage: Storage) {

  this.init();
  }

  async init()
  {
    await this.storage.create();

    this.profileService.get_contacts().subscribe(
      res=>{
        this.users = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
