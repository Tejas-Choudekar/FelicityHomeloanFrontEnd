import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IncomeDetailValue } from './incomeDetailValue';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class IncomeDetailService{
    incomeDetails: IncomeDetailValue[];

    constructor(private http: HttpClient){

    }

    sendToServer(incomeDetails: IncomeDetailValue): Observable<String>{
        let url = "http://localhost:8181/incomedetails/add";
        return this.http.post<String>(url, incomeDetails);
    }
}