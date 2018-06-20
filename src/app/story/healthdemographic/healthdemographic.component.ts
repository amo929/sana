import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-healthdemographic',
	templateUrl: './healthdemographic.component.html',
	styleUrls: ['./healthdemographic.component.css']
})
export class HealthdemographicComponent implements OnInit {

	// for checking inputs
	error: boolean = false;

	// info about the user
	age: string;
	gender: string;
	smoker: number;
	hbp: number;
	diabetic: number;
	surgery: number;
	allergy: number;

	constructor(public us: UserService) { }

	ngOnInit() {
		if(this.us.sanauser) {
			if(this.us.getAge()) {
				this.age = this.us.getAge();
			}
			if(this.us.getGender()) {
				this.gender = this.us.getGender();
			}
			if(this.us.getSmoker() !== undefined) {
				this.smoker= this.us.getSmoker();
			}
			if(this.us.getHBP() !== undefined) {
				this.hbp = this.us.getHBP();
			}
			if(this.us.getDiabetes() !== undefined) {
				this.diabetic = this.us.getDiabetes();
			}
			if(this.us.getSurgery() !== undefined) {
				this.surgery = this.us.getSurgery();
			}
			if(this.us.getAllergy() !== undefined) {
				this.allergy = this.us.getAllergy();
			}
		}
	}

	onAgeChange(inp: string): void {
		this.age = inp;
	}
	onGenderChange(inp: string): void {
		this.gender=inp;
	}
	onSmokerChange(inp: string): void {
		this.smoker = +inp;
	}
	onHBPChange(inp: string): void {
		this.hbp = +inp;
	}
	onDiabeticChange(inp: string): void {
		this.diabetic = +inp;
	}
	onSurgeryChange(inp: string): void {
		this.surgery = +inp;
	}
	onAllergyChange(inp: string): void {
		this.allergy = +inp;
	}

	goNext(): void {
		this.us.setAge(this.age);
		this.us.setGender(this.gender);
		this.us.setSmoker(this.smoker);
		this.us.setHBP(this.hbp);
		this.us.setDiabetes(this.diabetic);
		this.us.setSurgery(this.surgery);
		this.us.setAllergy(this.allergy);

		if(!this.optionCheck()) {
			this.us.current += 1;
		}
	}
	goBack(): void {
		this.us.current -= 1;
	}

	// RETURN TRUE IF SOMETHING ISN'T FILLED OUT
	// RETURN FALSE IF EVERYTHING IS FILLED OUT
	optionCheck() {
		if(this.age === undefined ||
			this.gender === undefined ||
			this.smoker === undefined ||
			this.hbp === undefined ||
			this.diabetic === undefined ||
			this.surgery === undefined ||
			this.allergy === undefined) {
				this.error = true;
				return true;
		}
		else {
			this.error = false;
			return false;
		}
	}
}
