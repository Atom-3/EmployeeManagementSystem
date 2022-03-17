
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeModComponent } from './employee-mod/employee-mod.component';

const routes: Routes = [
  {
    path: '', pathMatch:"full", redirectTo:"employees/home",
  },
  { 
    path: 'employees/home',
    component: EmployeeHomeComponent
  },
  { 
    path: 'employees/insert',
    component: AddEmployeeComponent
  },
  {
    path: "employees/list",
    component: EmployeeListComponent
  },
  {
    path: "employees/delete/:id", component: EmployeeListComponent
  }
 // {
   // path: "employees/update/:id", component: EmployeeModComponent
  //}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
