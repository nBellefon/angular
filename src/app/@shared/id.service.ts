import { Injectable } from '@angular/core';
import { User } from '/src/app/@shared/auth.service';

@Injectable()
export class IdService {

  ids: Array<{id: string}> = []; 

  constructor() { }


  addID( user : User) {
    console.log(user.getId);
    this.ids.push(user.getId);
    console.log(this.ids);
  }

  lenght(){
    return this.ids.length
  }


}  