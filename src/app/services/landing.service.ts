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
		this.us.setFirstname("Michael");
		this.us.setLastname("Scott");
		this.us.setZipcode("14606");

		this.us.setSpouse(0);
		this.us.setChildren(2);

		this.us.setAge("age_18_20");
		this.us.setGender("male");
		this.us.setSmoker(1);
		this.us.setHBP(1);
		this.us.setDiabetes(1);
		this.us.setSurgery(1);
		this.us.setAllergy(1);

		this.us.setPlanBonus(0);
		this.us.setPlanMult(1.2);

		// REPLACE BELOW WITH SOMETHING LIKE this.us.sanauser = this.as.getUser(..)
		this.as.getUser(this.email, this.password);
		return true;
	}
}
