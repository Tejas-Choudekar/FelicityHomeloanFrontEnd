import { Component, OnInit } from '@angular/core';
import { applicationValue } from './applicationValue';

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

  applicationvalue: applicationValue = new applicationValue();

  PropertyDetailsForm(pdform) {

  }

  IncomeDetailsForm(idform) {

  }

  LoanDetailsForm(ldform) {

  }

  PersonalDetailsForm(pedform) {

    let confirm = true;

    //verify the password
    if (this.confirmPassword != this.applicationvalue.password) {
      confirm = false;
      this.array['password'] = "password does not match";
    }


  }
}

