import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable()
export class LoginService{
    
    loginusers: Login[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(url,loginuser) :Observable<String>{

      return this.http.post<String>(url,loginuser);
      
    }
}