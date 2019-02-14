import { IncomeDetailValue } from './income-detail/incomeDetailValue';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

    incomeDetail: IncomeDetailValue;
    maxGrantableLoan: number;
}