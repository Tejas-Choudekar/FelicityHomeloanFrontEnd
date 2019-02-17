import { LoanStatusValue } from './loanStatusValue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class LoanStatusService{
    loanStatus: LoanStatusValue[];

    constructor(private http: HttpClient){

    }

    sendToServer(loanStatus: LoanStatusValue): Observable<String>{
        let url = "http://localhost:8181/loanstatus/add";
        return this.http.post<String>(url, loanStatus);
    }
}