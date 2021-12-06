import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl:string = "http://127.0.0.1:8000/login_api";

  constructor(private httpClient: HttpClient) { }

  login(email, password)
  {
    return this.httpClient.post<LoginResponse>(this.loginUrl, {email: email, password: password});
  }

}
