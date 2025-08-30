import { Route } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementDetailComponent } from './employee-management-detail.component';

export const employeeManagementRoutes: Route[] = [
  {
    path: '',
    component: EmployeeManagementComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'detail/:id',
    component: EmployeeManagementDetailComponent,
  },
];
