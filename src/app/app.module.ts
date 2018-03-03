import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpModule } from '@angular/http'
import { approutes } from '../app/routes/app.route';
import { GototopDirective } from './gototop.directive';
import { AuthGuard } from './app.guard';
import { RegisterComponent } from './components/register/register.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-modules/angular.material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import {FileInputAccessorModule} from "file-input-accessor";
@NgModule({
  declarations: [
    AppComponent,
    CustomeDirectiveDirective,
    MyNewPipePipe,
    UsersComponent,
    EmployeesComponent,
    GototopDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    approutes,
    InfiniteScrollModule, HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
   NgProgressModule,
   FileInputAccessorModule
  ],
  providers: [AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [InfiniteScrollModule,BrowserAnimationsModule,MaterialModule]
})
export class AppModule { }
