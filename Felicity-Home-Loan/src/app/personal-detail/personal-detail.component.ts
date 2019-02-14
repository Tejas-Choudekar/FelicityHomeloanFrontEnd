import { Component, OnInit } from '@angular/core';
import { PersonalDetailValue } from './personalDetailValue';
import { Router } from '@angular/router';
import { PersonalDetailService } from './personalDetail-service';

@Component({
  selector: 'homeloan-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  constructor(private personaldetailService: PersonalDetailService, private router: Router) { }

  ngOnInit() {
  }

  response: string;
  confirmPassword: String;
  che: Boolean;
  array = { password: "", msg: "" };

  personalValue: PersonalDetailValue = new PersonalDetailValue();

  PersonalDetailForm() {

    let confirm = true;

    //verify the password
    if (this.confirmPassword != this.personalValue.password) {
      confirm = false;
      this.array['password'] = "Password does not match";
    }

    if(confirm === true){    
    this.personaldetailService.sendToServer(this.personalValue).subscribe(data =>{
      this.response = data['status'];
      console.log(this.response)

      if(this.response === 'Personal Details added successfully!' ){
        this.router.navigate(['./homeLoan-fileUpload']);
      }
      else{
        this.router.navigate(['./homeloan-personal-detail']);
      }
    })
  }
  }
}
