import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  user: User;
  Ids: Array<{id: string}> = []; 

  constructor() { }

  auth(email:string, password: string, id:string) {
    this.user = { id : id, email: email, password: password };
    

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

    addID( user : User) {
    console.log(user.id);
    this.Ids.push(user.id);
    console.log(this.Ids);
  }

}



export class User {
  id: string;
  email:string;
  password: string;
}