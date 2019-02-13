import { Component, OnInit } from '@angular/core';
import { PropertyDetailValue } from './propertyDetailValue';
import { IncomeDetailValue } from './incomeDetailValue';
import { LoanDetailValue } from './loanDetailValue';
import { PersonalDetailValue } from './personalDetailValue';

@Component({
  selector: 'homeLoan-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {


  confirmPassword: String;
  che: Boolean;
  array = { password: "", msg: "" };

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  constructor() {

  }


  ngOnInit() {
  }

  propertyValue: PropertyDetailValue = new PropertyDetailValue();
  incomeValue: IncomeDetailValue = new IncomeDetailValue();
  loanValue: LoanDetailValue = new LoanDetailValue();
  personalValue: PersonalDetailValue = new PersonalDetailValue();
  //applicationvalue: applicationValue = new applicationValue();

  PropertyDetailForm() {

  }

  IncomeDetailForm() {

  }

  LoanDetailForm() {

  }

  PersonalDetailForm() {

    let confirm = true;

    //verify the password
    if (this.confirmPassword != this.personalValue.password) {
      confirm = false;
      this.array['password'] = "Pasword does not match";
    }


  }
}

