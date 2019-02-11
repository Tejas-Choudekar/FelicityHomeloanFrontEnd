import { Component, OnInit } from '@angular/core';
import { applicationValue } from './applicationValue';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  responseProperty : String;
  responseIncome : String;
  responseLoan : String;
  responsePersonal : String;
  constructor() { }

  ngOnInit() {
  }

  applicationvalue : applicationValue =  new applicationValue();

  PropertyDetailsForm(pdform) {

  }

  IncomeDetailsForm(idform) {

  }
  
  LoanDetailsForm(ldform) {

  }

  PersonalDetailsForm(pedform) {
    
  }
}

