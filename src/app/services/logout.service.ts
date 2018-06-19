import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';
<<<<<<< HEAD
import { AjaxstuffService } from '../services/ajaxstuff.service';
=======
>>>>>>> origin/Miguel

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements CanActivate {

<<<<<<< HEAD
  constructor(
    private us: UserService,
    private as: AjaxstuffService) { }
=======
  constructor(private us: UserService) { }
>>>>>>> origin/Miguel

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.us.sanauser) {
      // MAKE UPDATE OF CURRENT STATUS
<<<<<<< HEAD
      this.as.updateUser(this.us.sanauser);
=======
      // PUT UPDATE LOGIC HERE
>>>>>>> origin/Miguel

      // THEN SET USER TO NULL
      this.us.sanauser = null;
    }
    this.us.current = 1;
    return true;
  }
}
