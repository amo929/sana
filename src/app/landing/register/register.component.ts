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
}
