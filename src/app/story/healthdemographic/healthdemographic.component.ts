import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-healthdemographic',
	templateUrl: './healthdemographic.component.html',
	styleUrls: ['./healthdemographic.component.css']
})
export class HealthdemographicComponent implements OnInit {

	age: string;
	gender: string;
	smoker: number;
	hbp: number;
	diabetic: number;
	surgery: number;
	allergy: number;

	constructor(public us: UserService) { }

	ngOnInit() {
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
		console.log(this.age);
		console.log(this.gender);
		console.log(this.smoker);
		console.log(this.hbp);
		console.log(this.diabetic);
		console.log(this.surgery);
		console.log(this.allergy);

		this.us.setAge(this.age);
		this.us.setGender(this.gender);
		this.us.setSmoker(this.smoker);
		this.us.setHBP(this.hbp);
		this.us.setDiabetes(this.diabetic);
		this.us.setSurgery(this.surgery);
		this.us.setAllergy(this.allergy);

		this.us.current += 1;
	}
	goBack(): void {
		this.us.current -= 1;
	}
}
