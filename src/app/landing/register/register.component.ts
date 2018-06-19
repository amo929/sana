import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { LandingService } from '../../services/landing.service';
<<<<<<< HEAD
import { AjaxstuffService } from '../../services/ajaxstuff.service';
=======
>>>>>>> origin/Miguel

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
=======
  val = false;
  lowerval = true;
  upperval = true;
  numberval = true;
  countval = true;

>>>>>>> origin/Miguel
  email: string;
  password: string;
  firstname: string;
  lastname: string;

  constructor(
    public us: UserService,
<<<<<<< HEAD
    public ls: LandingService,
    private as: AjaxstuffService) { }
=======
    public ls: LandingService) { }
>>>>>>> origin/Miguel

  ngOnInit() {
  }

  registerSubmit(): void {
<<<<<<< HEAD
    this.as.makeAccount(this.email, this.password, this.firstname, this.lastname);
=======
    // make http post method
>>>>>>> origin/Miguel
  }

  changeView(): void {
    this.ls.changeView();
  }
<<<<<<< HEAD
=======

  toggleReqs(){
    this.val = !this.val;
  }
  
  checkPw(){
    if(this.password.match(/[a-z]/g)) this.lowerval = false;
    else this.lowerval = true;
    if(this.password.match(/[A-Z]/g)) this.upperval = false;
    else this.upperval = true;
    if(this.password.match(/[0-9]/g)) this.numberval = false;
    else this.numberval = true;
    if(this.password.length >= 8) this.countval = false;
    else this.countval = true;

    
  }
>>>>>>> origin/Miguel
}
