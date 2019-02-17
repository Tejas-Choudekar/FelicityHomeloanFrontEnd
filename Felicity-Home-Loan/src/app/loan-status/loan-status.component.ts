import { Component, OnInit } from '@angular/core';
import { LoanStatusValue } from './loanStatusValue';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {

  statusValue: LoanStatusValue= new LoanStatusValue();
  constructor() { }
  loginuser: any;
  ngOnInit() {
    this.loginuser= JSON.parse(localStorage.getItem('applicationId'))['token'];
    this.statusValue.statusId= this.loginuser;
    this.statusValue.status="To Be Verified";
  }

}
