import { Component, OnInit, Inject } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login-service';

@Component({
  selector: 'homeLoan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private rs: LoginService) { }

  ngOnInit() {
  }

  loginuser: Login = new Login();

  loginUser() {
    let url = 'http://localhost:8181/login/userlogin';
    this.rs.retriveFromServer(url, this.loginuser).subscribe(data => {
      console.log(data['status']);

    });


  }

}
