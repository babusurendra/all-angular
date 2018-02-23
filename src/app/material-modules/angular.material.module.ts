import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
@NgModule({imports:[MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule],
exports:[MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule]})
export class MaterialModule{}
