import { Component, OnInit } from '@angular/core';
import { PropertyDetailValue } from './propertyDetailValue';
import { PropertyDetailService } from './propertyDetail-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor(private propertydetailService: PropertyDetailService, private router: Router) { }

  ngOnInit() {
  }

  response: string;

  propertyValue: PropertyDetailValue = new PropertyDetailValue();

  PropertyDetailForm() {
    this.propertydetailService.sendToServer(this.propertyValue).subscribe(data =>{
      this.response = data['status'];
      console.log(this.response)

      if(this.response === 'Property Details added successfully!' ){
        this.router.navigate(['./homeloan-income-detail']);
      }
      else{
        this.router.navigate(['./homeloan-property-detail']);
      }
    })

  }
}
