import { Component, OnInit } from '@angular/core';
import { AdminLogin } from './admin-login';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  invalid: String;
  adminLogin: AdminLogin = new AdminLogin();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AdminLogin() {
    
    if(this.adminLogin.adminName === 'admin' && this.adminLogin.adminPassword ==='admin') {
      this.router.navigate(['./homeloan-admin-dashboard']);
    }
    else {
      this.invalid='User Name or Password invalid';
      this.router.navigate(['./homeloan-admin-login']);
     
    }
  



  }
}
