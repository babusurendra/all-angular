import { Component,ErrorHandler } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
//import {myModel} from './search.model';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
  
})
export class AppComponent implements ErrorHandler {
  handleError(error:any){
    // console.log(error);
     return Observable.throw(error);
  }
  showGoTop : boolean = false;
  curentPage = 1;
  baseurl = 'http://node-hnapi.herokuapp.com/news?pages='
  constructor(private http :Http) { 
    this.http.get('http://node-hnapi.herokuapp.com/news?page=1').subscribe((res:any) => {
      let data = res.json();
      this.items = [...this.items,...data]
    }).unsubscribe;
  };
  private items = [];
  errorExist = false;
  errorMessage :string ;
  showLoader : boolean = false;
  getData() {
    // alert('scrolled');
    this.curentPage = this.curentPage+1;
    console.log("new req is " + this.baseurl+this.curentPage)
    return this.http.get(this.baseurl+this.curentPage).map((res)=>{
      return res;
    }).catch(this.handleError)
  }
  onScroll(){
    this.showLoader = true;
  this.showGoTop  = true;
    
    this.getData().subscribe((res =>{
          let data = res.json();
          
          //console.log(`data is ${data[0]}`);
         this.items = [...this.items,...data]
    }),(error =>{
       console.log(error.status);
       //alert('in error')
       this.errorExist = true;
       this.errorMessage ="Error while fetching data from service";  
    }),(()=>{
      this.showLoader = false;
    }))
  }
  
  userform = new FormGroup({
  username : new FormControl("",[Validators.required,Validators.minLength(5)]),
  address : new FormControl("",this.addressValidate),
  language: new FormControl("")
  });
  onFormSubmit(details){
    console.log(details);
  }
  showaddressError = true;
  addressValidate(control:AbstractControl){
    console.log("control length" + control.value.length)
    if(control.value.length < 5)
    {
      console.log("in if conditiono");
      return {address:true};
    }     
      
  }
  usernameChanged(oldval,newval){
     this.userform.patchValue({address:newval});
     console.log("new value of username is" + newval);
  }
}
