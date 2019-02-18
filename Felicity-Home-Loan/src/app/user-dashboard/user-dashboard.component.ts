import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from '../property-detail/propertyDetail-service';
import { PropertyDetailValue } from '../property-detail/propertyDetailValue';
import { Login } from '../login/login';
import { Router } from '@angular/router';
import { IncomeDetailValue } from '../income-detail/incomeDetailValue';
import { LoanDetailValue } from '../loan-detail/loanDetailValue';
import { PersonalDetailValue } from '../personal-detail/personalDetailValue';
import { LoanStatusValue } from '../loan-status/loanStatusValue';
import { PersonalDetailService } from '../personal-detail/personalDetail-service';
import { IncomeDetailService } from '../income-detail/incomeDetail-service';
import { LoanDetailService } from '../loan-detail/loanDetail-service';
import { LoanStatusService } from '../loan-status/loanStatus-service';

@Component({
  selector: 'homeloan-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})


export class UserDashboardComponent implements OnInit {

  loginuser: Login = new Login();
  propertyValue: PropertyDetailValue;
  incomeValue: IncomeDetailValue;
  loanValue: LoanDetailValue;
  personalValue: PersonalDetailValue;
  loanStatus: LoanStatusValue;

  constructor(private propertyDetails : PropertyDetailService, private personalDetails :PersonalDetailService,private incomeDetails :IncomeDetailService,private loanDetails :LoanDetailService,private statusDetails :LoanStatusService, private router: Router) { 

  }
  
  ngOnInit() {
    this.loadPersonalDetails();
    this.loadIncomeDetails();
    this.loadPropertyDetails();
    this.loadLoanDetails();
    this.loadStatusDetails();

  }

  loadPersonalDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/personaldetails/'+this.loginuser.applicationid;
    this.personalDetails.retrieveFromServer(url).subscribe(
      data => {
        this.personalValue = data;
      
        console.log(this.personalValue);
      });
  }

  loadIncomeDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/incomedetails/'+this.loginuser.applicationid;
    this.incomeDetails.retrieveFromServer(url).subscribe(
      data => {
        this.incomeValue = data;
        console.log(this.incomeValue);
      });
  }

  loadPropertyDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/propertydetails/'+this.loginuser.applicationid;
    this.propertyDetails.retrieveFromServer(url).subscribe(
      data => {
        this.propertyValue = data;
        console.log(this.propertyValue);
      });
  }

  loadLoanDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/loandetails/'+this.loginuser.applicationid;
    this.loanDetails.retrieveFromServer(url).subscribe(
      data => {
        this.loanValue = data;
        console.log(this.loanValue);
      });
  }

  loadStatusDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/statusdetails/'+this.loginuser.applicationid;
    this.statusDetails.retrieveFromServer(url).subscribe(
      data => {
        this.loanStatus = data;
        console.log(this.loanStatus);
      });
  }

  logout(){
    localStorage.removeItem('userDetails');
    this.router.navigate(['./homeloan-login']);
  }

}
