import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-zipcodes',
  templateUrl: './zipcodes.component.html',
  styleUrls: ['./zipcodes.component.css']
})
export class ZipcodesComponent implements OnInit {

  zipcodes: string[] = [
    "10001",
    "10011",
    "10018",
    "10019",
    "14606",
    "14602",
    "14610",
    "13478"
  ]

  currentzip: string = this.zipcodes[0];

  constructor(public us: UserService) { }

  ngOnInit() {
  }

  goNext(): void {
    if(this.us.getZipcode() !== this.currentzip) {
      this.us.setZipcode(this.currentzip);
      // http update
    }
    console.log(this.us.getZipcode());
    this.us.current += 1;
  }
  goBack(): void {
  }
}

