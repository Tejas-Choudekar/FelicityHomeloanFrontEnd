import { Component, OnInit, Inject } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid: any;


  constructor(private rs: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginuser: Login = new Login();

  loginUser() {
    window.localStorage.setItem('userDetails',JSON.stringify({token:this.loginuser , name:'userDetails'}))
    console.log(this.loginuser);
    let url = 'http://localhost:8181/login/userlogin';
    this.rs.retriveFromServer(url, this.loginuser).subscribe(data => {
      this.loginuser=data['status'];
      console.log(this.loginuser) 

    if(this.loginuser === 'Logged in Successfully!') {
      this.router.navigate(['./homeloan-user-dashboard']);
    }
    else {
      localStorage.removeItem('userDetails');
      this.router.navigate(['./homeloan-login']);
      this.invalid="User Name or Password invalid";
    }
  

  });

  }

}
