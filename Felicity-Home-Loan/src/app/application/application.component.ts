import { Component, OnInit } from '@angular/core';
import { propertyDetailValue } from './propertyDetailValue';
import { incomeDetailValue } from './incomeDetailValue';
import { loanDetailValue } from './loanDetailValue';
import { personalDetailValue } from './personalDetailValue';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  // responseProperty : String;
  // responseIncome : String;
  // responseLoan : String;
  // responsePersonal : String;
  confirmPassword: String;
  che: Boolean;
  array = { password: "", msg: "" };

  constructor() { }

  ngOnInit() {
  }

  propertyValue: propertyDetailValue = new propertyDetailValue();
  incomeValue: incomeDetailValue = new incomeDetailValue();
  loanValue: loanDetailValue = new loanDetailValue();
  personalValue: personalDetailValue = new personalDetailValue();
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
      this.array['password'] = "password does not match";
    }


  }
}

