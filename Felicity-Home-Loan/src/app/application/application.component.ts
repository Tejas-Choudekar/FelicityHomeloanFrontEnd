import { Component, OnInit } from '@angular/core';
import { PropertyDetailValue } from '../property-detail/propertyDetailValue';
import { IncomeDetailValue } from '../income-detail/incomeDetailValue';
import { LoanDetailValue } from '../loan-detail/loanDetailValue';
import { PersonalDetailValue } from '../personal-detail/personalDetailValue';
import { PropertyDetailService } from '../property-detail/propertyDetail-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {


  

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  constructor(private propertydetailService: PropertyDetailService, private router: Router) {

  }


  ngOnInit() {
  }
  response: string;

  
  
  
  
  //applicationvalue: applicationValue = new applicationValue();

  

  

  

  
}

