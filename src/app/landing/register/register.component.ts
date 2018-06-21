import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { LandingService } from '../../services/landing.service';
import { AjaxstuffService } from '../../services/ajaxstuff.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  val = false;
  lowerval = true;
  upperval = true;
  numberval = true;
  countval = true;

  email: string;
  password: string;
  firstname: string;
  lastname: string;

  constructor(
    public us: UserService,
    public ls: LandingService,
    private as: AjaxstuffService) { }

  ngOnInit() {
  }

  registerSubmit(): void {
    this.as.makeAccount(this.email, this.password, this.firstname, this.lastname);
  }

  changeView(): void {
    this.ls.changeView();
  }

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
}
