import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { EmployeesComponent } from '../employees/employees.component'
import {ModuleWithProviders} from '@angular/core'
export const routes: Routes = [
{
    path: 'users', component: UsersComponent
},
{ 
    path: 'employee', component: EmployeesComponent 
}
] 
export const approutes :ModuleWithProviders = RouterModule.forRoot(routes);