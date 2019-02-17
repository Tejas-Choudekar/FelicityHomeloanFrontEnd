import { Component, OnInit } from '@angular/core';
import { PropertyDetailService } from '../property-detail/propertyDetail-service';
import { PropertyDetailValue } from '../property-detail/propertyDetailValue';
import { Login } from '../login/login';
import { Router } from '@angular/router';
import { IncomeDetailValue } from '../income-detail/incomeDetailValue';
import { LoanDetailValue } from '../loan-detail/loanDetailValue';
import { PersonalDetailValue } from '../personal-detail/personalDetailValue';
import { LoanStatusValue } from '../loan-status/loanStatusValue';

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

  constructor(private propertyDetails : PropertyDetailService, private router: Router) { }
  
  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    this.loginuser= JSON.parse(localStorage.getItem('userDetails'))['token'];
    console.log(this.loginuser.applicationid);
    let url = 'http://localhost:8181/userdetails/'+this.loginuser.applicationid;
    this.propertyDetails.retrieveFromServer(url).subscribe(
      data => {
        this.propertyValue = data;
       
        this.incomeValue=this.propertyValue.incomeDetails;
        this.loanValue=this.propertyValue.loanDetails;
        this.personalValue=this.propertyValue.personalDetails;
        this.loanStatus=this.propertyValue.loanStatus;
        console.log(this.personalValue);
      });
  }

  logout(){
    localStorage.removeItem('userDetails');
    this.router.navigate(['./homeloan-login']);
  }

}
