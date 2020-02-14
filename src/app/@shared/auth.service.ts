import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: User;
  Users: Array<User> = []; 
  compteur : number = 0;

  constructor() { }

  auth(email:string, password: string, id:string) {
    this.compteur =+ 1;
    this.user = { id : this.compteur, email: email, password: password };
    this.addUser(this.user);

    console.log("authentaticated")
  }

  getId(){
    return this.user.id;
  }

  getEmail(){
    return this.user.email;
  }
  getPassword(){
    return this.user.password;
  }

  getUsers(){
    return this.Users;
  }

  addUser( user : User) {
    this.Users.push(user);

  }

}



export class User {
  id: number;
  email:string;
  password: string;
}