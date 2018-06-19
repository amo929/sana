import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-planoptions',
	templateUrl: './planoptions.component.html',
	styleUrls: ['./planoptions.component.css']
})
export class PlanoptionsComponent implements OnInit {

	selectedPlan: string = "gold";
	selectedDescription: string;
	plan_mult: number;
	plan_bonus: number;

	constructor(
		public us: UserService,
		private http: HttpClient) { }

	ngOnInit() {
	}

	planVal(n: number): void {
		// MODIFY plan_bonus
		if (n === 1 || n === 3 || n === 5) {
			this.plan_bonus = 0.5;
		}
		else {
			this.plan_bonus = 0;
		}

		// MODIFY plan_mult
		if (this.selectedPlan === "gold") {
			this.plan_mult = 1.1;
		}
		else if (this.selectedPlan === "plat") {
			this.plan_mult = 1.2;
		}
		else {
			this.plan_mult = 1;
		}

		// ADD A DESCRIPTION FOR THE PLAN SELECTED, BINDED TO 'selectedDescription'
		switch (n) {
			case 1: this.selectedDescription = "You selected The Gold Plan for 6 months"; break;
			case 2: this.selectedDescription = "You selected The Gold Plan for 12 months"; break;
			case 3: this.selectedDescription = "You selected The Platinum Plan for 6 months"; break;
			case 4: this.selectedDescription = "You selected The Platinum Plan for 12 months"; break;
			case 5: this.selectedDescription = "You selected Medicare for 6 months"; break;
			case 6: this.selectedDescription = "You selected Medicare for 12 months"; break;
		}
		this.us.setPlanBonus(this.plan_bonus);
		this.us.setPlanMult(this.plan_mult);

		console.log(this.us.getPlanBonus());
		console.log(this.us.getPlanMult());
	}

	goSummary(): void {
		if(this.plan_mult === undefined) {
			this.selectedDescription = "Please select a plan";
			return;
		}

		this.us.setPlanMult(this.plan_mult);
		this.us.setPlanBonus(this.plan_bonus);

		console.log(this.us.getPlanMult());
		console.log(this.us.getPlanBonus());
		console.log(this.us.sanauser);

		this.us.current += 1;
	}
	goBack(): void {
		this.us.current -= 1;
	}
}
