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
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

		// CREATES THE USER
		return this.as.getUser(this.email, this.password);
	}
}
