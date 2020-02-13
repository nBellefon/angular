import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: User;

  constructor() { }

  auth(email:string, password: string) {
    this.user = { email: email, password: password };
    console.log("authentaticated")
  }

}

export class User {
  email:string;
  password: string;
}