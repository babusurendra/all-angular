// import { Component } from '@angular/core';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   scrollCallback;
//   constructor(){
//     this.scrollCallback = this.getStories.bind(this);
//   }
//   //title = 'app';
//   items = [1,2,3,3,4,1,2,3,3,4,1,2,3,3,4,1,2,3,3,4]
//   birthday = new Date(); // April 15, 1988
//   onScroll(){
//     alert("scrolled");
//   }
//   getStories (){
//     var newData = [10,20,30,30,40,10,20,30,30,40,10,20,30,30,40,10,20,30,30,40]
//      this.items = [...this.items, ...newData]
//      console.log(this.items);
//   }

// }
import { Component,ErrorHandler } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
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
  getData() {
    // alert('scrolled');
    this.curentPage = this.curentPage+1;
    console.log("new req is " + this.baseurl+this.curentPage)
    return this.http.get(this.baseurl+this.curentPage).map((res)=>{
      return res;
    }).catch(this.handleError)
  }
  onScroll(){
  this.showGoTop  = true;
    
    this.getData().take(3).subscribe((res =>{
          let data = res.json();
         this.items = [...this.items,...data]
    }),(error =>{
       console.log(error.status);
       //alert('in error')
       this.errorExist = true;
       this.errorMessage ="Error while fetching data from service";  
    }))
  }
}
