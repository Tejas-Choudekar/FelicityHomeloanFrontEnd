import { Component, OnInit } from '@angular/core';
import { AdminLogin } from './admin-login';
import { AdminLoginService } from './admin-login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminLoginSrvice: AdminLoginService, private router: Router) { }

  ngOnInit() {
  }

  adminlogin: AdminLogin = new AdminLogin();

  AdminLogin() {
    window.localStorage.setItem('adminDetails',JSON.stringify({token:this.adminlogin , name:'adminDetails'}))
    console.log(this.adminlogin);
    let url = 'http://localhost:8181/login/adminlogin';
    this.adminLoginSrvice.retriveFromServer(url, this.adminlogin).subscribe(data => {
      this.adminlogin=data['status'];
      console.log(this.adminlogin) 

    if(this.adminlogin === 'Logged in Successfully!') {
      this.router.navigate(['./homeloan-admin-dashboard']);
    }
    else {
      this.router.navigate(['./homeloan-admin-login']);
    }
  

  });

  }
}
