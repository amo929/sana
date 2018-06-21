import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';
import { AjaxstuffService } from '../services/ajaxstuff.service';
import { User } from '../user';


@Injectable({
	providedIn: 'root'
})
export class LandingService implements CanActivate {

	viewLogin: boolean = true;
	email: string;
	password: string;

	// for register
	// errorval = false;
	// successval = false;

	constructor(
		public us: UserService,
		private as: AjaxstuffService) { }

	getView(): boolean { //probably not useful
		return this.viewLogin;
	}

	changeView(): void {
		this.viewLogin = !this.viewLogin;
	}

	// FOR THE LOG-IN PAGE TO GET TO STORY
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		this.us.displayError = false;
		return this.as.getUser(this.email, this.password);
	}
	// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
	// 	this.us.sanauser = new User();
	// 	return true;
	// }
}
