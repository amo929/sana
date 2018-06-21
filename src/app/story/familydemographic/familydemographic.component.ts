import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-familydemographic',
	templateUrl: './familydemographic.component.html',
	styleUrls: ['./familydemographic.component.css']
})
export class FamilydemographicComponent implements OnInit {

	// spouseOptions: Array<Object> = [
	// 	{ id: 0, text: "0" },
	// 	{ id: 1, text: "1" }
	// ];
	// childrenOptions: Array<Object> = [
	// 	{ id: 0, text: "0" },
	// 	{ id: 1, text: "1" },
	// 	{ id: 2, text: "2" },
	// 	{ id: 3, text: "3" },
	// 	{ id: 4, text: "4+" }
	// ];

	spouseOptions: string[] = ["0", "1"];
	childrenOptions: string[] = ["0","1","2","3","4"]


	selectedSpouse: Object = this.spouseOptions[0];
	selectedChild: Object = this.childrenOptions[0];

	constructor(public us: UserService) { }

	ngOnInit() {
		if(this.us.sanauser) {

			if(this.us.getSpouse() !== undefined) {
				this.spouseOptions.forEach(str => {
					if(+str === this.us.getSpouse()) {
						this.selectedSpouse = str;
					}	
				});
			}

			if(this.us.getChildren() !== undefined) {
				this.childrenOptions.forEach(str => {
					if(str === "4+") str = "4";
					if(+str === this.us.getChildren()) {
						this.selectedChild = str;
					}
				});
			}
		}
	}

	goNext(): void {
		if(!this.selectedSpouse && !this.selectedChild) {
			return;
		}
		this.us.setSpouse(+this.selectedSpouse);
		if(this.selectedChild === "4+") this.selectedChild = "4";
		this.us.setChildren(+this.selectedChild);

		this.us.current += 1;
	}
	goBack(): void {
		this.us.current -= 1;
	}
}
