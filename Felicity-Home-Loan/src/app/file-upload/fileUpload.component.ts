import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { LoanStatusValue } from '../loan-status/loanStatusValue';
import { LoanStatusService } from '../loan-status/loanStatus-service';
import { Router } from '@angular/router';

@Component({
  selector: 'homeloan-fileUpload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent implements OnInit {
  statusValue: LoanStatusValue = new LoanStatusValue();
  loginuser: any;
  selectedFile: File = null;
  uploadProgress: any;

  constructor(private http: HttpClient, private loanstatusService: LoanStatusService, private router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];

  }
  response: string;

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8181/upload', fd, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(event.loaded / event.total * 100);
      }
      else if (event.type === HttpEventType.Response) {
        this.uploadProgress = event;
      }
    });
  }

  onDone() {
    this.loginuser = JSON.parse(localStorage.getItem('applicationId'))['token'];
    this.statusValue.statusId = this.loginuser;
    this.statusValue.status = "To Be Verified";

    this.loanstatusService.sendToServer(this.statusValue).subscribe(data => {

      this.response = data['status'];
      console.log(this.response)
      if (this.response === 'Loan Status added successfully!') {
        this.router.navigate(['./homeloan-application-successful']);
      }
      else {
        this.router.navigate(['./homeloan-home-page']);
      }
    })
  }
}
