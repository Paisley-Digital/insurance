import { Route } from '@angular/router';
import { EmployeeFeatureUploadComponent } from './upload/employee-feature-upload.component';

export const uploadRoutes: Route[] = [
  {
    path: '',
    component: EmployeeFeatureUploadComponent,
  },
];
