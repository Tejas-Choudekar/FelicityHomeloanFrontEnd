import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-application-successful',
  templateUrl: './application-successful.component.html',
  styleUrls: ['./application-successful.component.css']
})
export class ApplicationSuccessfulComponent implements OnInit {

  constructor(private router: Router) { }
  loginuser: any;
  ngOnInit() {
    this.loginuser= JSON.parse(localStorage.getItem('applicationId'))['token'];
  }

  onOk(){
    localStorage.removeItem('applicationId');
    this.router.navigate(['./homeloan-login']);
  }

}
