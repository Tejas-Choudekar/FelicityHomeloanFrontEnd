import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { PersonalDetailValue } from './personalDetailValue';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class PersonalDetailService{
    personalDetails: PersonalDetailValue[];

    constructor(private http: HttpClient){

    }

    sendToServer(personalDetails: PersonalDetailValue): Observable<String>{
        let url = "http://localhost:8181/personaldetails/add";
        return this.http.post<String>(url, personalDetails);
    }
}