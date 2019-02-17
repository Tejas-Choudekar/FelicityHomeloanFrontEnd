import { IncomeDetailValue } from '../income-detail/incomeDetailValue';
import { LoanDetailValue } from '../loan-detail/loanDetailValue';
import { PersonalDetailValue } from '../personal-detail/personalDetailValue';
import { LoanStatusValue } from '../loan-status/loanStatusValue';

export class PropertyDetailValue {
  constructor(
    public applicationid?: number,
    public propertyName?: String,
    public propertyLocation?: String,
    public estimatedAmount?: number,

    public incomeDetails?: IncomeDetailValue,
    public loanDetails?: LoanDetailValue,
    public personalDetails?: PersonalDetailValue,
    public loanStatus?: LoanStatusValue
  ) {

  }
}