import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { EmployeesComponent } from '../employees/employees.component'
import { ModuleWithProviders } from '@angular/core'
import { AuthGuard } from '../app.guard';
import { AppComponent } from '../app.component';
export const routes: Routes = [

    {
        path: 'users', component: UsersComponent
    },
    {
        path: 'employee', component: EmployeesComponent, canActivate: [AuthGuard]
    }
]
export const approutes: ModuleWithProviders = RouterModule.forRoot(routes);