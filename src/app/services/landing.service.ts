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
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		//FIGURE OUT SOMETHING TO GET THE USER
		console.log("email: " + this.email)
		console.log("password: " + this.password);
		this.us.sanauser = new User();

		// REPLACE BELOW WITH SETTING UP this.us.sanauser 
		this.as.getUser(this.email, this.password);
		return true;
	}
}
