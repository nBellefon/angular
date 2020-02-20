import { Injectable } from '@angular/core';

@Injectable()
export class ConnexionService {

  user : User;

  constructor() { }

    auth(pseudo:string, password:string) {
 //   this.compteur +=1
    this.user = {pseudo: pseudo, password : password};
  //  this.addFilm(this.film);

    console.log("connexion réussie")
  }

  getPseudo(){
    return this.user.pseudo;
  }


  }

    export class User{
    pseudo : string;
    password : string;

}