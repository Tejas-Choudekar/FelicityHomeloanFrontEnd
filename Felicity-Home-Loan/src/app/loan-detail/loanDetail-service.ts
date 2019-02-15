import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { LoanDetailValue } from './loanDetailValue';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class LoanDetailService{
    loandetails: LoanDetailValue[];

    constructor(private http: HttpClient){

    }

    sendToServer(loandetails: LoanDetailValue): Observable<String>{
        let url = "http://localhost:8181/loandetails/add";
        return this.http.post<String>(url, loandetails);
    }
}