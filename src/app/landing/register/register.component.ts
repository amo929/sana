import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { LandingService } from '../../services/landing.service';

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
    public ls: LandingService) { }

  ngOnInit() {
  }

  registerSubmit(): void {
    // make http post method
  }

  changeView(): void {
    this.ls.changeView();
  }
}
