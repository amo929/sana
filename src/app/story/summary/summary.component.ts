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
		
	}

	goBack(): void {
		this.us.current -= 1;
	}
}
