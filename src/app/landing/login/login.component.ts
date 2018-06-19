import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from '../../services/user.service';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    public us: UserService,
    public ls: LandingService) { }

  ngOnInit() {
  }

  loginSubmit(): void {
    //make http get call
  }

  changeView(): void {
    this.ls.changeView();
  }

}
