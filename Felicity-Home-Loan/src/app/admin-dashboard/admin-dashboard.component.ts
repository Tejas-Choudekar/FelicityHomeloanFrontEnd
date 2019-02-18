import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanStatusService } from '../loan-status/loanStatus-service';
import { LoanStatusValue } from '../loan-status/loanStatusValue';

@Component({
  selector: 'homeloan-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  status: LoanStatusValue[];
  verified: LoanStatusValue[];
  toBeVerified: LoanStatusValue[];


  constructor(private router: Router, private loanStatus: LoanStatusService) { }

  ngOnInit() {
    this.loadAllApplications();
    this.loadPendingApplications();
    this.loadVerifiedApplications();
  }

  loadAllApplications() {
    let url = 'http://localhost:8181/applications';
    this.loanStatus.retrieveFromServer(url).subscribe(
      data => {
        this.status = data;
      });
  }

  loadVerifiedApplications() {
    let url = 'http://localhost:8181/approved';
    this.loanStatus.retrieveFromServer(url).subscribe(
      data => {
        this.verified = data;
      });
  }

  loadPendingApplications() {
    let url = 'http://localhost:8181/toverify';
    this.loanStatus.retrieveFromServer(url).subscribe(
      data => {
        this.toBeVerified = data;
      });
  }


  logout() {

    this.router.navigate(['./homeloan-admin-login']);
  }
}
