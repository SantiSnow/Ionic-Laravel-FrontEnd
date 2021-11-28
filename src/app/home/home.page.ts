import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:string;
  password:string;

  constructor() { }
  
  login()
  {
    console.log(`Login... User: ${this.user}, Pass: ${this.password}`);
  }

  ngOnInit() {
  }

}
