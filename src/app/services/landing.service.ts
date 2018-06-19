import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';
<<<<<<< HEAD
import { AjaxstuffService } from '../services/ajaxstuff.service';
=======
>>>>>>> origin/Miguel
import { User } from '../user';


@Injectable({
	providedIn: 'root'
})
export class LandingService implements CanActivate {

	viewLogin: boolean = true;
<<<<<<< HEAD
	email: string;
	password: string;

	constructor(
		public us: UserService,
		private as: AjaxstuffService) { }
=======

	constructor(
		public us: UserService,
		private http: HttpClient) { }
>>>>>>> origin/Miguel

	getView(): boolean { //probably not useful
		return this.viewLogin;
	}

	changeView(): void {
		this.viewLogin = !this.viewLogin;
	}

<<<<<<< HEAD
	// FOR THE LOG-IN PAGE TO GET TO STORY
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		//FIGURE OUT SOMETHING TO GET THE USER
		console.log("email: " + this.email)
		console.log("password: " + this.password);
		this.us.sanauser = new User();
		this.us.setFirstname("Michael");
		this.us.setLastname("Scott");

		// REPLACE BELOW WITH SETTING UP this.us.sanauser 
		this.as.getUser(this.email, this.password);
		return true;
	}
=======
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		alert("going into story")

		this.us.sanauser = new User();
		return true;
	}

>>>>>>> origin/Miguel
}
