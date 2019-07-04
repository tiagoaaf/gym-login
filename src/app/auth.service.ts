import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    localStorage.setItem('USER', userInfo.email);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER');
  }

  public getUser() {
    return localStorage.getItem('USER');
  }

}