import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { PropertyDetailValue } from './propertyDetailValue';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class PropertyDetailService{
    propertydetails: PropertyDetailValue[];

    constructor(private http: HttpClient){

    }

    sendToServer(propertydetails: PropertyDetailValue): Observable<String>{
        let url = "http://localhost:8181/propertydetails/add";
        return this.http.post<String>(url, propertydetails);
    }
}