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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      return this.as.updateUser(this.us.sanauser, "logout");
  }
}
