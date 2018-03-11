import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { NgProgressModule } from 'ngx-progressbar';
import { Validators } from '@angular/forms/src/validators';
import {HttpClient,HttpRequest,HttpEventType,HttpResponse,HttpHeaders,HttpParams} from '@angular/common/http';
import {Http} from '@angular/http';
import { RequestOptions,Headers} from '@angular/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http : Http , private httpclient : HttpClient) { }
  url = false;
  public notImage : boolean;
  sizeMatch: boolean = true;
  percentDone :any;
  ngOnInit() {
  }

  public validatePhoto = (control: AbstractControl) =>{
    console.log(control);

    if (control.dirty) {
      console.log("type is " + control.value[0].type);
      console.log("values are" + (control.value[0].size < 4000))
      console.log("values are" + (control.value[0].size > 2000))
      
      if (control.value[0].type != "image/jpeg") {
        this.notImage = true;
        return { photo: false }
      }
      else if (!(control.value[0].size < 4000 && control.value[0].size > 2000)){
        this.sizeMatch = false;
        return {photo:false}
      }
      else{
         // alert("in true block");
          return {photo:true}
      }


      //console.log(control.value[0].type);
    }
  }
  userForm = new FormGroup({
    firstname: new FormControl('', this.validateFname),
    lastname: new FormControl('', this.validateFname),
    address: new FormControl(''),
    mart_status: new FormControl(''),
    photo: new FormControl('', this.validatePhoto)
  });
  validateFname(control: AbstractControl) {
    if (/^[a-zA-Z]*$/.test(control.value)) {
      return { firstname: true }
    }
    
  }
  onFormSubmit(userform) {
    //console.log("in on submit");
    console.log(userform.value);
    this.submituser();
  }
  
    //console.log("After file control");
    //console.log("Size is" + control.value.filename);
    // if (control.value) {
    //   return { photo: true }
    // }
  //}

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        //console.log("file data is " + event.target.files[0]);
        this.url = event.target.result;
        //console.log("url is " + this.url);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
    const files = event.target.files;
    console.log("files are " + files);
    if (files.length > 0) {
      let file;
      let formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        file = files[i];
        formData.append('userfile', file);
        console.log("file name is " + file.name);
      }
      // let headers = new Headers();
      // headers.append('Accept', 'application/json');
      //  let options = new RequestOptions({ headers: headers });
      // this.http.post('http://localhost:3000/upload', formData,options)
      //   .map(resp => resp.json())
      //   .subscribe(data => console.log('response', data));


        // const req = new HttpRequest.post('http://localhost:3000/upload', formData, {
        //   reportProgress: true,
        // }); 


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };
//new HttpHeaders({'h1':'v1','h2':'v2'});
let headers1 = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'token'});
//let headers2 = new HttpHeaders({'Authorization': 'token'});
//headers = ";

        this.httpclient.post('http://localhost:3000/upload',formData,{ headers:headers1
      }).map((res) => res).subscribe((event:any) => {
          // Via this API, you get access to the raw event stream.
          // Look for upload progress events.
          if (event.type === HttpEventType.UploadProgress) {
            // This is an upload progress event. Compute and show the % done:
             this.percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${this.percentDone}% uploaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');
          }
        }); 
    }
 

 
  }
  
  submituser(){

    console.log(JSON.stringify(this.userForm.value));
    let headers1 = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'token'});
    this.httpclient.post('http://localhost:3000/create',this.userForm.value,{ headers:headers1
      }).map((res) => res).subscribe((event:any) => {
          // Via this API, you get access to the raw event stream.
          // Look for upload progress events.
          // if (event.type === HttpEventType.UploadProgress) {
          //   // This is an upload progress event. Compute and show the % done:
          //    this.percentDone = Math.round(100 * event.loaded / event.total);
          //   console.log(`File is ${this.percentDone}% uploaded.`);
          // } else if (event instanceof HttpResponse) {
          //   console.log('File is completely uploaded!');
          // }
          console.log(event);
        }); 
  }
 // }


  // uploadFile(evt) {
  //   const files = evt.target.files;
  //   if (files.length > 0) {
  //     let file;
  //     let formData = new FormData();
  //     for (let i = 0; i < files.length; i++) {
  //       file = files[i];
  //       formData.append('userfile', file, file.name);
  //     }
  //     this.http.post('http://localhost:3000/upload', formData)
  //       .map(resp => resp.json())
  //       .subscribe(data => console.log('response', data));
  //   }
  // }

}




  // fileChange(event){
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     console.log("File data is " + file);
  //      reader.readAsDataURL(file);
  //      console.log(this.userForm.get('photo'));
  //     reader.onload = () => {
  //       this.userForm.get('photo').patchValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       })

  //      };
  //   }
  // }
//}

