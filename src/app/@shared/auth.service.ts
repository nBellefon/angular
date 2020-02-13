import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: User;
  users : User [];

  constructor() { }

  auth(email:string, password: string) {
    this.user = { email: email, password: password };
    console.log("authentaticated")
  }

  getEmail(){
    return this.user.email;
  }
  getPassword(){
    return this.user.password;
  }

}

export class User {
  email:string;
  password: string;
}