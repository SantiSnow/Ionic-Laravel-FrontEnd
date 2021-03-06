import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  tasksUrl = "http://127.0.0.1:8000/user_info";
  contactsUrl = "http://127.0.0.1:8000/contacts";

  constructor(private httpClient: HttpClient) { }

  get_profile(email)
  {
    return this.httpClient.post<User>(this.tasksUrl, { email: email});
  }

  get_contacts()
  {
    return this.httpClient.get<User[]>(this.contactsUrl);
  }  
}
