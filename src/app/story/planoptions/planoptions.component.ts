import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../services/user.service';
import { AjaxstuffService } from '../../services/ajaxstuff.service';

import { Lookup } from '../../lookup';

@Component({
	selector: 'app-planoptions',
	templateUrl: './planoptions.component.html',
	styleUrls: ['./planoptions.component.css']
})
export class PlanoptionsComponent implements OnInit {
	stuff = new Lookup();
	selectedPlan: string = "gold";
	selectedDescription: string;
	plan_mult: number;
	plan_bonus: number;

	constructor(
		public us: UserService,
		private http: HttpClient,
		private as: AjaxstuffService) { }

	ngOnInit() {
		if(this.us.sanauser) {
			if(this.us.getPlanMult() !== undefined && this.us.getPlanBonus() !== undefined) {
				if(this.us.getPlanMult() === 1.1) {
					this.plan_mult = 1.1;
					this.selectedPlan = "gold";
				}
				else if(this.us.getPlanMult() === 1.2) {
					this.plan_mult = 1.2;
					this.selectedPlan = "plat";
				}
				else if (this.us.getPlanMult() === 1) {
					this.plan_mult = 1;
					this.selectedPlan = "medi";
				}

				if(this.us.getPlanBonus() === 0.5) {
					this.plan_bonus = this.us.getPlanBonus();
					if(this.us.getPlanMult() === 1.1) this.planVal(1);
					else if(this.us.getPlanMult() === 1.2) this.planVal(3);
					else if(this.us.getPlanMult() === 1) this.planVal(5);
				}
				else if(this.us.getPlanBonus() === 0) {
					this.plan_bonus = this.us.getPlanMult();
					if(this.us.getPlanMult() === 1.1) this.planVal(2);
					else if(this.us.getPlanMult() === 1.2) this.planVal(4);
					else if(this.us.getPlanMult() === 1) this.planVal(6);
				}
			}
		}
	}

	planVal(n: number): void {
		// MODIFY plan_bonus
		if (n === 1 || n === 3 || n === 5) {
			this.plan_bonus = 0.5;
		}
		else if(n === 2 || n === 4 || n === 6) { 
			this.plan_bonus = 0;
		}

		// MODIFY plan_mult
		if (this.selectedPlan === "gold") {
			this.plan_mult = 1.1;
		}
		else if (this.selectedPlan === "plat") {
			this.plan_mult = 1.2;
		}
		else if (this.selectedPlan === "medi") {
			this.plan_mult = 1;
		}

		// ADD A DESCRIPTION FOR THE PLAN SELECTED, BINDED TO 'selectedDescription'
		switch(n) {
			case 1: this.selectedDescription = "You selected The Gold Plan for 6 months"; break;
			case 2: this.selectedDescription = "You selected The Gold Plan for 12 months"; break;
			case 3: this.selectedDescription = "You selected The Platinum Plan for 6 months"; break;
			case 4: this.selectedDescription = "You selected The Platinum Plan for 12 months"; break;
			case 5: this.selectedDescription = "You selected Medicare for 6 months"; break;
			case 6: this.selectedDescription = "You selected Medicare for 12 months"; break;
		}
		this.us.setPlanBonus(this.plan_bonus);
		this.us.setPlanMult(this.plan_mult);
	}

	goSummary(): void {
		if(this.plan_mult === undefined) {
			this.selectedDescription = "Please select a plan";
			return;
		}

		this.us.setPlanMult(this.plan_mult);
		this.us.setPlanBonus(this.plan_bonus);
		// this.calculate();
		// this.us.current+=1;
		this.as.updateUser(this.us.sanauser, "summary");
	}
	goBack(): void {
		this.us.current -= 1;
	}

	// calculate(): number {
	// 	console.log("INSIDE calculate() IN PLAN OPTIONS");
	// 	let total = 0;
	// 	total += this.find(this.stuff.zipcodes, this.us.getZipcode());
	// 	total += this.find(this.stuff.gender, this.us.getGender());
	// 	total += this.us.getSmoker() === 1 ? 250 : 0;
	// 	total += this.us.getDiabetes() === 1 ? 125 : 0;
	// 	total += this.us.getHBP() === 1 ? 50 : 0;
	// 	total += this.us.getSurgery() === 1 ? 150 : 0;
	// 	total += this.us.getAllergy() === 1 ? 15 : 0;
	// 	total += this.us.getSpouse() === 1 ? 100 : 0;
	// 	total += this.find(this.stuff.children, this.us.getChildren());
	// 	total += this.find(this.stuff.age, this.us.getAge());
	// 	total *= (1 + this.us.getPlanBonus());
	// 	total *= this.us.getPlanMult();
	// 	return total;
	// }

	// find(arr: any[], key: any): any {
	// 	let retval;
	// 	arr.forEach(val => {
	// 		if(val[key] {
	// 			retval = val[key];
	// 			return retval;
	// 		}
	// 	});
	// 	return retval;
	// }
}

