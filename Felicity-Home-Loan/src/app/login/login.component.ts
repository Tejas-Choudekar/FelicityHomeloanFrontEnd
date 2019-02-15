import { Component, OnInit, Inject } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeLoan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private rs: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginuser: Login = new Login();

  loginUser() {
    // let url = 'http://localhost:8181/login/userlogin';
    let url = 'http://192.168.100.63:8181/login/userlogin';
    this.rs.retriveFromServer(url, this.loginuser).subscribe(data => {
      this.loginuser=data['status'];
      console.log(this.loginuser) 

    if(this.loginuser === './Logged in Successfully!') {
      this.router.navigate(['./homeloan-user-dashboard']);
    }
    else {
      this.router.navigate(['./homeLoan-login']);
    }
  

  })

  }

}
