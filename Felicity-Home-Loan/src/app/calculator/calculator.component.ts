import { Component, OnInit } from '@angular/core';
import { calculatorValue } from "./calculatorValue";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorvalue: calculatorValue = new calculatorValue();

  constructor() { }

  ngOnInit() {
  }

  calculateEligibility():number
{
    //console.log("here"+this.calculatorvalue.monthlyIncome);
    
    this.calculatorvalue.TotalEligibility = 60*(0.6 * this.calculatorvalue.monthlyIncome);

    //Loan amount = 60 * (0.6 * net monthly salary)
    
    return this.calculatorvalue.TotalEligibility;
}

calculateEMI() : number{

       

  this.calculatorvalue.newROI = (((this.calculatorvalue.rateOfInterest) / 12)/100);

  this.calculatorvalue.emi = 
         ((this.calculatorvalue.loan  *  this.calculatorvalue.newROI)  *  
    (Math.pow((1  +  this.calculatorvalue.newROI) , this.calculatorvalue.tenure))) / 
    ((Math.pow((1  +  this.calculatorvalue.newROI) , this.calculatorvalue.tenure)) - 1);
    //EMI = P*R*{((1+R)^n)/((1+R)^n-1)}

    return this.calculatorvalue.emi;

}

}
