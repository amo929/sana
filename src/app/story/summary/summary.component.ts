import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

	summary: string = `
	\nzipcode ${(this.us.getZipcode())}
	\nspouse ${(this.us.getSpouse())}
	\nchildren ${(this.us.getChildren())}
	\nage ${(this.us.getAge())}
	\ngender ${(this.us.getGender())}
	\nsmoker ${(this.us.getSmoker())}
	\nhbp ${(this.us.getHBP())}
	\diabetes ${(this.us.getDiabetes())}
	\nsurgery ${(this.us.getSurgery())}
	\nallergy ${(this.us.getAllergy())}
	\nplan_mult ${(this.us.getPlanMult())}
	\nplan_bonus ${(this.us.getPlanBonus())}`;

	info: any[];
	quote: number;


	constructor(public us: UserService) { }

	ngOnInit() {
		// this.info.push(this.us.getZipcode());
		// this.info.push(this.us.getSpouse());
		// this.info.push(this.us.getChildren());
		// this.info.push(this.us.getAge());
		// this.info.push(this.us.getGender());
		// this.info.push(this.us.getSmoker());
		// this.info.push(this.us.getHBP());
		// this.info.push(this.us.getDiabetes());
		// this.info.push(this.us.getSurgery());
		// this.info.push(this.us.getAllergy());
		// this.info.push(this.us.getPlanMult());
		// this.info.push(this.us.getPlanBonus());
	
		// this.summary = this.info.join(", ");
		// console.log(this.summary);
		// console.log(this.us.sanauser);
	}

	goBack(): void {
		this.us.current -= 1;
	}
}
