import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'homeloan-fileUpload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;
  uploadProgress: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];

  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8181/upload', fd, { reportProgress: true, observe: 'events' }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(event.loaded / event.total * 100);
        // console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%')
        
      }
      else if (event.type === HttpEventType.Response) {
        this.uploadProgress = event;
        //console.log(event);
      }
    });
  }

}
