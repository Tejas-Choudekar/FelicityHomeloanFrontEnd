import { Injectable } from '@angular/core';
import { PropertyDetailValue } from '../property-detail/propertyDetailValue';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDashboardService{

    propertydetails: PropertyDetailValue;

   }