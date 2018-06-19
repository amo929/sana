import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { User } from '../user';

@Injectable({
	providedIn: 'root'
})
export class AjaxstuffService {

	// PLEASE MODIFY THIS URL
	url: string = "http://localhost:3000";

	constructor(private http: HttpClient,
				private us: UserService) { }

	// THE FUNCTIONS BELOW ARE FOR THE HTTP AJAX CALLS

	// GET THE USER OBJECT 
	getUser(input_email: string, input_password: string) {
		
		let obj = {
			email: input_email,
			password: input_password
		}
		this.http.post(this.url + "/users/login", obj).toPromise().then(data => {
			console.log(data);
			// DO SOMETHING REGARDING UserService
			// LIKE this.us.sanauser = data;
		}).catch(p => console.log(p));
	}

	// REGISTER AN ACCOUNT
	// NEED A WAY TO SEE IF THE ACCOUNT WAS MADE
	makeAccount(input_email: string, input_password: string, input_firstname: string, input_lastname: string) {
		let obj = {
			email: input_email,
			password: input_password,
			firstname: input_firstname,
			lastname: input_lastname
		}
		this.http.post(this.url +"/users/register", obj).toPromise().then(data => {
			// check if data is null for bad inputs
			console.log(data);
		}).catch(p => console.log(p));
	}

	// UPDATE THE ENTIRE USER
	updateUser(user: User) {
		this.http.post(this.url+"/users/update", user).toPromise().then(data => {
			console.log(data);
		}).catch(p => console.log(p));
	}
}
