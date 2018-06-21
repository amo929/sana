import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
	
	summary: any = [
		'Name: '+ this.us.sanauser.firstname + ' ' + this.us.sanauser.lastname, 
		'Zipcode: ' + this.us.sanauser.zipcode,
        'Associates: ' + (this.us.sanauser.spouse + this.us.sanauser.children),
        'Age: ' + ((this.us.sanauser.age === "age_0_17") ? '0-17' : (this.us.sanauser.age === "age_18_20") ? '18-20' : (this.us.sanauser.age === "age_21_40") ? '21-40' : (this.us.sanauser.age === "age_40_plus") ? '40+': ''),
        'Gender: ' + this.us.sanauser.gender,
        'Smoker: ' + ((this.us.sanauser.smoker == 1)? 'yes': 'no'),
        'High Blood Pressure: ' + ((this.us.sanauser.hbp == 1)? 'yes': 'no'),
		'Previous Surgery: ' + ((this.us.sanauser.surgery == 1)? 'yes': 'no'),
		'Allergies: ' + ((this.us.sanauser.allergy == 1)? 'yes': 'no'),
		'Diabetes: ' + ((this.us.sanauser.diabetes == 1)? 'yes': 'no'),
		'Plan Type: ' + ((this.us.sanauser.plan_mult == 1.1)? 'Gold': (this.us.sanauser.plan_mult == 1.2)? 'Platinum' : 'Medicare'),
		'Plan Duration: ' + ((this.us.sanauser.plan_bonus == 0)? 'Long Term (12 Months)' : 'Short Term (6 Months)')
    ]
	

	info: any[];
	quote: string;


	constructor(public us: UserService) { }

	ngOnInit() {
		if(this.us.sanauser) {
			console.log("START OF SUMMARY INIT")
			if(this.us.getQuote() !== undefined) {
				console.log("WE GOT A QUOTE")
				let val = this.us.getQuote();
				console.log("QUOTE:" + val);
				this.quote = "Your Quote: " + val.toFixed(2);
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
		win.document.write('<' + 'html' + '><b>SANA</b> Insurance<' + 'body' + '><div style="width:75%; margin:auto">');
		win.document.write('<h1 style="text-align:center">Quote Summary</h1>');
		win.document.write('<br> <h4 style="padding-left:2em;">Primary Guest: ' + this.us.getFirstname() + ' ' + this.us.getLastname() + '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Associates: ' + (this.us.getChildren()+this.us.getSpouse())+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Demographic Information: </h4>');
		win.document.write(' <h4 style="padding-left:5em">Gender: ' + this.us.getGender()+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Age: ' + ((this.us.sanauser.age === "age_0_17") ? '0-17' : (this.us.sanauser.age === "age_18_20") ? '18-20' : (this.us.sanauser.age === "age_21_40") ? '21-40' : (this.us.sanauser.age === "age_40_plus") ? '40+': '') + '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Smoker: ' + (this.us.getSmoker() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">High Blood Pressure: ' + (this.us.getHBP() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Previous Surgery: ' + (this.us.getSurgery() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Allergies: ' + (this.us.getAllergy() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:5em">Diabetic: ' + (this.us.getDiabetes() === 1? "Yes": "No")+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em">Plan Type: ' +  ((this.us.sanauser.plan_mult == 1.1)? 'Gold': (this.us.sanauser.plan_mult == 1.2)? 'Platinum' : 'Medicare')+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em">Plan Duration: ' +  ((this.us.sanauser.plan_bonus == 0)? 'Long Term (12 Months)' : 'Short Term (6 Months)')+ '</h4>');
		win.document.write(' <h4 style="padding-left:2em;">Total Insurance Quote Price: ' + this.us.getQuote()+ '</h4>');
		win.document.write('</div><' + '/body' + '><' + '/html' + '>');
		win.document.close();
		win.print();
		win.close();
	}
}
