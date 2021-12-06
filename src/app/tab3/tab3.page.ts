import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/User';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: User;

  constructor(private profileService: ProfileService,
              private storage: Storage) {

    this.init();
  }

  async init()
  {
    await this.storage.create();
    const email = await this.storage.get('email');

    this.profileService.get_profile(email).subscribe(
      res=>{
        this.user = res;
      },
      err=>{
        console.log(err);
      }
    );
  }
}
