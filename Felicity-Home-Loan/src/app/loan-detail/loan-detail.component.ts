import { Component, OnInit } from '@angular/core';
import { LoanDetailValue } from './loanDetailValue';
import { LoanDetailService } from './loanDetail-service';
import { Router } from '@angular/router';
import { IncomeDetailValue } from '../income-detail/incomeDetailValue';
import { SharedService } from '../shared-service';

@Component({
  selector: 'homeloan-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {


  constructor(private loandetailService: LoanDetailService, private sharedService: SharedService, private router: Router) { }
  loanValue: LoanDetailValue = new LoanDetailValue();
  loginuser: any;
  ngOnInit() {
    this.loanValue.maxGrantableLoan = this.sharedService.maxGrantableLoan;
    this.loginuser= JSON.parse(localStorage.getItem('applicationId'))['token'];
    this.loanValue.loanDetailsId= this.loginuser;

  }

  response: string;

  LoanDetailForm() {
    this.loandetailService.sendToServer(this.loanValue).subscribe(data => {
      this.response = data['status'];
      console.log(this.response)

      if (this.response === 'Loan Details added successfully!') {
        this.router.navigate(['./homeloan-personal-detail']);
      }
      else {
        this.router.navigate(['./homeloan-loan-detail']);
      }
    })

  }
}
