import { Component, OnInit } from '@angular/core';
import { IncomeDetailValue } from './incomeDetailValue';
import { IncomeDetailService } from './incomeDetail-service';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service';

@Component({
  selector: 'homeloan-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.css']
})
export class IncomeDetailComponent implements OnInit {

  incomeValue: IncomeDetailValue = new IncomeDetailValue();
  constructor(private incomedetailService: IncomeDetailService, private sharedService: SharedService , private router: Router) { }
  loginuser: any;
  ngOnInit() {
    this.loginuser= JSON.parse(localStorage.getItem('applicationId'))['token'];
  
  this.incomeValue.incomeDetailsId= this.loginuser;
  }

  response: string;
  

  IncomeDetailForm() {
    this.incomedetailService.sendToServer(this.incomeValue).subscribe(data =>{
      
      this.response = data['status'];
      console.log(this.response)
      this.calculateMaxGrantableLoan();
      if(this.response === 'Income Details added successfully!' ){
        this.router.navigate(['./homeloan-loan-detail']);
      }
      else{
        this.router.navigate(['./homeloan-income-detail']);
      }
    })

  }

  calculateMaxGrantableLoan(): number {
    
    this.sharedService.maxGrantableLoan = Math.trunc(60 * (0.6 * this.incomeValue.salary));

    // console.log("loan = " + this.loanValue.maxGrantableLoan);
    //Loan amount = 60 * (0.6 * net monthly salary)

    return ;
  }
}
