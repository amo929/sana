import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../services/user.service';
import { User } from '../user';

@Injectable({
	providedIn: 'root'
})
export class AjaxstuffService {

	// PLEASE MODIFY THIS URL
	url: string = "/sana/request";

	constructor(private http: HttpClient,
				private us: UserService) { }

	// THE FUNCTIONS BELOW ARE FOR THE HTTP AJAX CALLS

	// GET THE USER OBJECT 
	getUser(input_email: string, input_password: string) {
		
		let obj = {
			email: input_email,
			password: input_password
		}
		return this.http.post(this.url + "/user/login", obj).toPromise().then(data => {
			console.log("THEN IN getUser()")
			console.log(data);

			this.us.sanauser = data;
			return true;
		}).catch(p => {
			console.log("CATCH IN getUser()")
			console.log(p);
			this.us.changeDisplayError();
			return false;
		});
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
		return this.http.post(this.url +"/user/register", obj).toPromise().then(data => {
			console.log("THEN IN makeAccount()");
			console.log(data);
			if (data == null) return false;
			else {
				// ADD A WAY TO GO BACK TO LOGIN AFTER SUCCESSFUL LOGIN
				return true;
			}
		}).catch(p => {
			console.log("CATCH IN makeAccount()")
			console.log(p);
			return false;
		});
	}

	// UPDATE THE ENTIRE USER
	updateUser(user: User, purpose: string) {
		return this.http.post(this.url+"/user/update", user).toPromise().then(data => {
			console.log(data);
			if(purpose === "summary") {
				this.us.current += 1;
			}
			if(purpose === "logout") {
				this.us.current = 1;
				this.us.sanauser = null;
			}
			return true;
		}).catch(p => {
			console.log("THEN IN updateUser()");
			console.log(p);
			return false;
		});
	}
}
