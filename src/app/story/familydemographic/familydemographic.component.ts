import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-familydemographic',
	templateUrl: './familydemographic.component.html',
	styleUrls: ['./familydemographic.component.css']
})
export class FamilydemographicComponent implements OnInit {

	spouseOptions: Array<Object> = [
		{ id: 0, text: "0" },
		{ id: 1, text: "1" }
	];
	childrenOptions: Array<Object> = [
		{ id: 0, text: "0" },
		{ id: 1, text: "1" },
		{ id: 2, text: "2" },
		{ id: 3, text: "3" },
		{ id: 4, text: "4+" }
	];

	selectedSpouse: Object = this.spouseOptions[0];
	selectedChild: Object = this.childrenOptions[0];

	constructor(public us: UserService) { }

	ngOnInit() {
	}

	goNext(): void {
		if(!this.selectedSpouse && !this.selectedChild) {
			return;
		}
		this.us.setSpouse(this.selectedSpouse['id']);
		this.us.setChildren(this.selectedChild['id']);

		console.log(this.us.getSpouse());
		console.log(this.us.getChildren());

		// if (this.us.getSpouse() !== this.selectedSpouse['id']) {
		// 	this.us.setSpouse(this.selectedSpouse['id']);
		// 	// http update
		// }
		// if (this.us.getChildren() !== this.selectedChild['id']) {
		// 	this.us.setChildren(this.selectedChild['id']);
		// 	// http update
		// }
		this.us.current += 1;
	}
	goBack(): void {
		this.us.current -= 1;
	}
}
