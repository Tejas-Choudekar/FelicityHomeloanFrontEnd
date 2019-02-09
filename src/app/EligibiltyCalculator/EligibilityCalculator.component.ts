import { Component, OnInit } from "@angular/core";
import { EligibilityCalculatorValue } from './EligibilityCalculatorValue';

@Component({
    selector : 'eligibility-calculator',
    templateUrl: './EligibilityCalculator.component.html'
})

export class EligibilityCalculatorComponent implements OnInit{
    
eligibilityCal : EligibilityCalculatorValue[];
MonthlyIncome : number;
TotalAmount:number;
    ngOnInit(): void {
       
    }
calculaeEMI()
{
    this.TotalAmount=this.MonthlyIncome*8.5;
}
}