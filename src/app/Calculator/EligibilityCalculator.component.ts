import { Component, OnInit } from "@angular/core";
import { CalculatorValue } from './CalculatorValue';
import { CalculatorService } from './CalculatorService';

@Component({
    selector : 'eligibility-calculator',
    templateUrl: './EligibilityCalculator.component.html'
})

export class EligibilityCalculatorComponent implements OnInit{

  

emi:number;
loan: number;
tenure: number;

calculatorvalue: CalculatorValue = new CalculatorValue();

    ngOnInit(): void {
       
    }

    

  // this is where injection happens
  constructor(private ecv: CalculatorService) {

  }

calculateEligibility():number
{
    console.log("here"+this.calculatorvalue.monthlyIncome);
    //let url="http://localhost:4200/";
    this.calculatorvalue.TotalEligibility = 60*(0.6 * this.calculatorvalue.monthlyIncome);
    //this.newMethod().ecv.sendToServer(this.calculatorvalue);
    // this.ecv.recieveFromServer(url).subscribe(data=>{
    //     this.TotalEligibility=data;
    // });
    return this.calculatorvalue.TotalEligibility;
}


// calculateEMI(){
//     this.newMethod();
// }

//     private newMethod() {
//         this.emi = ((this.loan * 8.5 * (Math.pow(9.5, this.tenure)) / Math.pow(9.5, (this.tenure - 1))));
//     }
}
