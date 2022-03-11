import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user!: User | null;

  constructor(private http: HttpClient) {
    this.user = {
      id: 56,
      nom: "userTest",
      role: "roleTest",
      urlPhoto: "https://img-0.journaldunet.com/8Lx3YQeOcn4AzbwIH3NzsuWBc38=/1500x/smart/1502e1bca6ce409c87a54d0da9158267/ccmcms-jdn/16511568.png"
    }
  }

  login() {
    console.log("login")
    //this.user = this.http.get<User>('http://localhost:3000/user');
  }

  logOut() {
    this.user = null;
  }

  getUser(): User | null {
    return this.user;
  }

  getToken(): boolean {
    return this.user ? true : false;
  }
}