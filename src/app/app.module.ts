import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import {HttpModule} from '@angular/http'
import {approutes} from '../app/routes/app.route';
import { GototopDirective } from './gototop.directive'
@NgModule({
  declarations: [
    AppComponent,
    CustomeDirectiveDirective,
    MyNewPipePipe,
    UsersComponent,
    EmployeesComponent,
    GototopDirective
  ],
  imports: [
    BrowserModule,
    approutes,
    InfiniteScrollModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[InfiniteScrollModule]
})
export class AppModule { }
