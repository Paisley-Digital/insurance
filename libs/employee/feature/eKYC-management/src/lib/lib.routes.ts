import { Route } from '@angular/router';
import { EmployeeFeatureEKYCManagementComponent } from './employee-feature-eKYC-management.component';
import { EmployeeFeatureEKYCManagementTemplatesComponent } from './employee-feature-eKYC-management-templates.component';
import { EmployeeFeatureEKYCManagementScheduleComponent } from './employee-feature-eKYC-management-schedule.component';
import { EmployeeFeatureEKYCManagementHistoryComponent } from './employee-feature-eKYC-management-history.component';

export const eKYCManagementRoutes: Route[] = [
  {
    path: '',
    component: EmployeeFeatureEKYCManagementComponent,
    children: [
      { path: '', redirectTo: 'templates', pathMatch: 'full' },
      {
        path: 'templates',
        component: EmployeeFeatureEKYCManagementTemplatesComponent,
      },
      {
        path: 'schedule',
        component: EmployeeFeatureEKYCManagementScheduleComponent,
      },
      {
        path: 'history',
        component: EmployeeFeatureEKYCManagementHistoryComponent,
      },
    ],
  },
];
