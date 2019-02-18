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
  invalid: String;

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
      

    if(this.loginuser === 'Logged in Successfully!') {
      this.router.navigate(['./homeloan-user-dashboard']);
    }
    else {
      
      this.invalid='User Name or Password invalid';
      localStorage.removeItem('userDetails');
      // console.log(this.invalid);
      this.router.navigate(['./homeloan-login']);
     
    }
  

  });

  }

}
