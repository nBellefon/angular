import { Injectable } from '@angular/core';

@Injectable()
export class ConnexionService {

  user : User;

  constructor() { }

    auth(email:string, password:string) {
 //   this.compteur +=1
    this.user = {email: email, password : password};
  //  this.addFilm(this.film);

    console.log("connexion réussie")
  }

  }

    export class User{
    email : string;
    password : string;

}