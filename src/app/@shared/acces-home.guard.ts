import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AccesHomeGuard implements CanActivate {

    constructor(private _router: Router) {
    }
    
    canActivate(  next: ActivatedRouteSnapshot,  state: RouterStateSnapshot){

    return true;
  }
}
