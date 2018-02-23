import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,AbstractControl} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

  userForm = new FormGroup({
    firstname : new FormControl('',this.validateFname),
    lastname : new FormControl('',this.validateFname),
    address : new FormControl(''),
    mart_status : new FormControl('')

  })
  validateFname(control:AbstractControl){
     if(/^[a-zA-Z]*$/.test(control.value)){
       return {firstname : true}
     }
  }
  onFormSubmit(userform){
      console.log("in on submit");
      console.log(userform.value);
  }
}
