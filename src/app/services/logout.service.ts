import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';
import { AjaxstuffService } from '../services/ajaxstuff.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements CanActivate {

  constructor(
    private us: UserService,
    private as: AjaxstuffService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.us.sanauser) {
      // MAKE UPDATE OF CURRENT STATUS
      this.as.updateUser(this.us.sanauser);

      // THEN SET USER TO NULL
      this.us.sanauser = null;
    }
    this.us.current = 1;
    return true;
  }
}
