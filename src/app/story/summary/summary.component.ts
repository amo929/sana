import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Lookup } from '../../lookup';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

	// summary: string = `
	// \nzipcode ${(this.us.getZipcode())}
	// \nspouse ${(this.us.getSpouse())}
	// \nchildren ${(this.us.getChildren())}
	// \nage ${(this.us.getAge())}
	// \ngender ${(this.us.getGender())}
	// \nsmoker ${(this.us.getSmoker())}
	// \nhbp ${(this.us.getHBP())}
	// \diabetes ${(this.us.getDiabetes())}
	// \nsurgery ${(this.us.getSurgery())}
	// \nallergy ${(this.us.getAllergy())}
	// \nplan_mult ${(this.us.getPlanMult())}
	// \nplan_bonus ${(this.us.getPlanBonus())}`;
	summary: any = [
		this.us.sanauser.zipcode,
		this.us.sanauser.spouse,
		this.us.sanauser.children,
		this.us.sanauser.age,
		this.us.sanauser.gender,
		this.us.sanauser.smoker,
		this.us.sanauser.hbp,
		this.us.sanauser.diabetes,
		this.us.sanauser.surgery,
		this.us.sanauser.allergy,
		this.us.sanauser.plan_mult,
		this.us.sanauser.plan_bonus
	];
	

	info: any[];

	stuff = new Lookup();
	quote: string;


	constructor(public us: UserService) { }

	ngOnInit() {
		if(this.us.sanauser) {
			console.log("START OF SUMMARY INIT")
			// if(!this.us.getQuote() || this.us.getQuote() === 0) {
			// 	console.log("RIGHT BEFORE calculate() FOR SUMMARY")
			// 	let val = this.calculate();
			// 	console.log(val);
			// 	this.us.setQuote(val);
			// }
			if(this.us.getQuote() !== undefined) {
				console.log("WE GOT A QUOTE")
				let val = this.us.getQuote();
				console.log("QUOTE:" + val);
				this.quote = "Your Quote: $" + val.toFixed(2);
			}
		}
	}

	goBack(): void {
		this.us.current -= 1;
	}

	printThis() {
		
		var win = window.open();
		self.focus();
		win.document.open();
		win.document.write('<' + 'html' + '><' + 'body' + '>');
		win.document.write('<h1 style="text-align:center">Quote Summary</h1>');
		win.document.write('<br> <h4 style="padding-left:2em;">Primary Guest: ' + this.us.getFirstname() + ' ' + this.us.getLastname() + '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Associates: ' + (this.us.getChildren()+this.us.getSpouse())+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Demographic Information: </h4>');
		win.document.write(' <h4 style="padding-left:5em">Gender: ' + this.us.getGender()+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Age: ' + this.us.getAge()+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Smoker: ' + (this.us.getSmoker() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">High Blood Pressure: ' + (this.us.getHBP() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Previous Surgery: ' + (this.us.getSurgery() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Allergies: ' + (this.us.getAllergy() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Diabetic: ' + (this.us.getDiabetes() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Total Insurance Quote Price: ' + this.us.getQuote()+ '</h4>');
		win.document.write('<' + '/body' + '><' + '/html' + '>');
		win.document.close();
		win.print();
		win.close();
	}

	calculate(): number {
		console.log("INSIDE calculate()");
		let total = 0;
		total += this.find(this.stuff.zipcodes, this.us.getZipcode());
		total += this.find(this.stuff.gender, this.us.getGender());
		total += this.us.getSmoker() === 1 ? 250 : 0;
		total += this.us.getDiabetes() === 1 ? 125 : 0;
		total += this.us.getHBP() === 1 ? 50 : 0;
		total += this.us.getSurgery() === 1 ? 150 : 0;
		total += this.us.getAllergy() === 1 ? 15 : 0;
		total += this.us.getSpouse() === 1 ? 100 : 0;
		total += this.find(this.stuff.children, this.us.getChildren());
		total += this.find(this.stuff.age, this.us.getAge());
		total *= (1 + this.us.getPlanBonus());
		total *= this.us.getPlanMult();
		return total;
	}

	find(arr: any[], key: any) {
		for(let i=0; i<arr.length; i++) {
			console.log(arr[i]);
			if(arr[key]) {
				console.log(arr[key]);
				return arr[i].key;
			}
		}
	}
}
