import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login';


@Injectable()
export class AdminLoginService {

  adminlogins: AdminLogin[];

  constructor(private http: HttpClient) {

  }
  retriveFromServer(url, adminlogin): Observable<String> {

    return this.http.post<String>(url, adminlogin);

  }
}