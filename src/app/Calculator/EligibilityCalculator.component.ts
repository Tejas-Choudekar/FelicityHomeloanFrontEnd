import { Component, OnInit } from "@angular/core";
import { CalculatorValue } from './CalculatorValue';
import { CalculatorService } from './CalculatorService';

@Component({
    selector : 'eligibility-calculator',
    templateUrl: './EligibilityCalculator.component.html'
})

export class EligibilityCalculatorComponent implements OnInit{

  

calculatorvalue: CalculatorValue = new CalculatorValue();

    ngOnInit(): void {
       
    }

    

  // this is where injection happens
  constructor(private ecv: CalculatorService) {

  }

calculateEligibility():number
{
    //console.log("here"+this.calculatorvalue.monthlyIncome);
    
    this.calculatorvalue.TotalEligibility = 60*(0.6 * this.calculatorvalue.monthlyIncome);

    //Loan amount = 60 * (0.6 * net monthly salary)
    
    return this.calculatorvalue.TotalEligibility;
}


calculateEMI() : number{

        // this.calculatorvalue.emi = (((this.calculatorvalue.loan * this.calculatorvalue.rateOfInterest) * 
        //   (Math.pow((1+this.calculatorvalue.rateOfInterest), this.calculatorvalue.tenure)) / 
        //   Math.pow((1+this.calculatorvalue.rateOfInterest), (this.calculatorvalue.tenure - 1))));

        // this.calculatorvalue.emi = 
        //   ((this.calculatorvalue.loan  *  this.calculatorvalue.rateOfInterest)  *  
        //   (Math.pow((1  +  this.calculatorvalue.rateOfInterest) , this.calculatorvalue.tenure))) / 
        //   (Math.pow((1  +  this.calculatorvalue.rateOfInterest) , this.calculatorvalue.tenure)  - 1)

        this.calculatorvalue.newROI = (((this.calculatorvalue.rateOfInterest) / 12)/100);

        this.calculatorvalue.emi = 
               ((this.calculatorvalue.loan  *  this.calculatorvalue.newROI)  *  
          (Math.pow((1  +  this.calculatorvalue.newROI) , this.calculatorvalue.tenure))) / 
          ((Math.pow((1  +  this.calculatorvalue.newROI) , this.calculatorvalue.tenure)) - 1);
          //EMI = P*R*{((1+R)^n)/((1+R)^n-1)}

          return this.calculatorvalue.emi;

    }
}
