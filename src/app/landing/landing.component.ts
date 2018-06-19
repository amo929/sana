import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  viewLogin: boolean = this.ls.getView();

  constructor(
    public us: UserService,
    public ls: LandingService) { }

    
  ngOnInit() {
  }

}
