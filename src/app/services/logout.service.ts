import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements CanActivate {

  constructor(private us: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.us.sanauser) {
      // MAKE UPDATE OF CURRENT STATUS
      // PUT UPDATE LOGIC HERE

      // THEN SET USER TO NULL
      this.us.sanauser = null;
    }
    this.us.current = 1;
    return true;
  }
}
