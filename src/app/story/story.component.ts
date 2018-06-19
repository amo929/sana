import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../user';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  current: number = 1;

  constructor(public us: UserService) { }

  ngOnInit() {
  }

  goNext(): void {
    this.current++;
  }
  goBack(): void {
    this.current--;
  }

}
